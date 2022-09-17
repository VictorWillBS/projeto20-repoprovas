import { Test } from "@prisma/client";

export type InsertTest = Omit<Test,'id'>

export interface ICreateTest {
  name: string,
  url: string,
  category:string,
  discipline:string,
  teacher:string
}