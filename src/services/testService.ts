import { ICreateTest } from "../types/testTypes";
import { Categories, Disciplines, Teachers, TeachersDisciplines, Test } from "@prisma/client";
import * as testRepository from '../repositories/testRepository'
export async function createTest(testData:ICreateTest, userId:number) {  
  console.log('entrei')
  const {id:teacherId} = await verifyTeacherExist(testData.teacher)as Teachers
  const {id:disciplineId} = await verifyDisciplineExist(testData.discipline)as Disciplines
  const {id: teacherDisciplinesId} = await verifyTeacherDisciplineExist(disciplineId,teacherId) as TeachersDisciplines
  const {id:categoryId} = await verifyCategoriesExist(testData.category) as Categories
  await verifyTestExist(testData.name,testData.url)
  const testInsertData ={
    name:testData.name,
    pdfUrl:testData.url,
    categoryId,
    teacherDisciplinesId
  }
  const insertedTest = await testRepository.insertTest(testInsertData)
  console.log(insertedTest)
 
  return insertedTest
}

export async function getTestOrderByDisciplines() {
  const tests =  await testRepository.getTestOrderByDiscipline();
  if(!tests.length){
    throw{code:'Not Found', message:'Test Not Founded.'}
   }

  return tests

}

export async function getTestOrderByTeacher() {
  const tests =  await testRepository.getTestOrderByTeacher();
 if(!tests.length){
  throw{code:'Not Found', message:'Test Not Founded.'}
 }

  return tests

}

async function verifyTeacherExist(teacherName:string) : Promise<Teachers> {
  console.log(teacherName)
  const teacher = await testRepository.getTeacherByName(teacherName)
  if(!teacher){
    throw{code:'Bad Request', message: 'Teacher not Found.'}
  }
  return teacher
}

async function verifyDisciplineExist(disciplineName:string) : Promise<Disciplines> {
  const discipline = await testRepository.getDisciplineByName(disciplineName)
  if(!discipline){
    throw{code:'Bad Request', message: 'Discipline not Found.'}
  }
  return discipline
}

async function verifyTeacherDisciplineExist(disciplineId:number,teacherId:number) : Promise<TeachersDisciplines> {
  const discipline = await testRepository.getTeacherDisciplinesByIds(disciplineId,teacherId)
  if(!discipline){
    throw{code:'Bad Request', message: 'Discipline And Teacher No Matches'}
  }
  return discipline
}

async function verifyCategoriesExist(categoryName:string) : Promise<Categories> {
  const category = await testRepository.getCategoryByName(categoryName)
  if(!category){
    throw{code:'Bad Request', message: 'Category Not Found.'}
  }
  return category
}

async function verifyTestExist(name:string,pdfUrl:string) : Promise<Test> {
  const testByName = await testRepository.getTestByName(name)
  const testByPdfUrl =await testRepository.getTestByPdfUrl(pdfUrl)
  if(testByName){
    throw{code: 'Conflict', message: 'Test Name Already Exist.'}
  }
  if(testByPdfUrl){
    throw{code: 'Conflict', message: 'Test pdfUrl Already Exist.'}
  }
  return testByName||testByPdfUrl
}


