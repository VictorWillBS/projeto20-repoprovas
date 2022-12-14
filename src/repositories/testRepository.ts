import { Categories, Disciplines, Teachers, TeachersDisciplines, Test } from "@prisma/client";
import { number } from "joi";
import prisma from "../database/database";
import { InsertTest } from "../types/testTypes";

export async function getTeacherByName(teacherName: string) {
  const teacher: Teachers = await prisma.teachers.findUnique({ where: { name: teacherName } })
  return teacher
}
export async function getDisciplineByName(disciplineName: string) {
  const discipline: Disciplines = await prisma.disciplines.findUnique({ where: { name: disciplineName } })
  return discipline
}

export async function getTeacherDisciplinesByIds(disciplineId: number, teacherId: number) {
  const teachersDisciplines: TeachersDisciplines = await prisma.teachersDisciplines.findFirst({ where: { disciplineId, teacherId } })
  return teachersDisciplines
}

export async function getCategoryByName(categoryName: string) {
  const category: Categories = await prisma.categories.findUnique({ where: { name: categoryName } })
  return category
}


export async function getTestByName(name: string, teacherDisciplinesId: number) {
  const test: Test = await prisma.test.findFirst({ where: { name, teacherDisciplinesId } })
  return test
}


export async function getTestByPdfUrl(pdfUrl: string, teacherDisciplinesId: number) {
  const test: Test = await prisma.test.findFirst({ where: { pdfUrl, teacherDisciplinesId } })
  return test
}

export async function getTestOrderByDiscipline() {
  const tests: any = await prisma.terms.findMany({
    include: {
      discipline: {
        include: {
          teachersDisciplines: {
            include: {
              test: {
                include: {
                  category: true,
                  teachersDisciplines:{
                    include:{teachers:true}
                  }
                }
              }
            }
          }
        }
      },
    }
  })
  return tests
}

export async function getTestOrderByTeacher() {
  const tests: any = await prisma.teachers.findMany({
    select: {
      name: true,
      teachersDisciplines: {
        select: {
          test: {
            select: {
              category: {
                select: {
                  name: true,
                }
              },
              name: true,
              pdfUrl: true
            }
          }
        }
      }
    }
  })

  return tests
}

export async function insertTest(testData: InsertTest) {
  try {

    await prisma.test.create({ data: { ...testData } })
  } catch (error) {
    console.log(error)
  }
  return true
}
