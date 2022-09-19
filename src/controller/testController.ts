import { Request,Response } from "express";
import { ICreateTest } from "../types/testTypes";
import * as testService from '../services/testService'
import { Test } from "@prisma/client";
export async function createTest(req:Request,res: Response) {
  const body : ICreateTest= req.body ;
  const userId : number =  res.locals.tokenDecoded;

  const insertedTest = await testService.createTest(body,userId) 
  res.status(201).send(insertedTest)
}

export async function getTestOrderByDiscipline(req:Request,res: Response) {
  const tests : any= await testService.getTestOrderByDisciplines()
  console.log(typeof(tests))
  res.status(200).send(tests)
}

export async function getTestOrderByTeacher(req:Request,res: Response) {
  const tests : any= await testService.getTestOrderByTeacher()
  res.status(200).send(tests)
}