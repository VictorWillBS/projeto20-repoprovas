import { Categories, Disciplines, Teachers, TeachersDisciplines, Test } from "@prisma/client";
import prisma from "../database/database";
import { InsertTest } from "../types/testTypes";

export async function getTeacherByName(teacherName:string) {
  const teacher:Teachers = await prisma.teachers.findUnique({where:{name:teacherName}})
  console.log('teacher')
  return teacher
}
export async function getDisciplineByName(disciplineName:string) {
  const discipline:Disciplines = await prisma.disciplines.findUnique({where:{name:disciplineName}})
  console.log('disc')
  return discipline
}

export async function getTeacherDisciplinesByIds(disciplineId:number,teacherId:number) {
  const teachersDisciplines:TeachersDisciplines = await prisma.teachersDisciplines.findFirst({where:{disciplineId,teacherId}})
  console.log('teacherDisc')
  return teachersDisciplines
}

export async function getCategoryByName(categoryName:string) {
  const category:Categories = await prisma.categories.findUnique({where:{name:categoryName}})
  console.log('category')
  return category
}


export async function getTestByName(name:string) {
  const test:Test = await prisma.test.findUnique({where:{name}})
  console.log('test1')
  return test
}


export async function getTestByPdfUrl(pdfUrl:string) {
  const test:Test = await prisma.test.findUnique({where:{pdfUrl}})
  console.log('test2')
  return test
}

export async function insertTest(testData:InsertTest){
  try {
    
    await prisma.test.create({data:{...testData}})
  } catch (error) {
    console.log(error)
  }
  return true
}