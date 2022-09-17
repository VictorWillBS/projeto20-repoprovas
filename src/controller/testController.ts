import { Request,Response } from "express";
import { ICreateTest } from "../types/testTypes";
import * as testService from '../services/testService'
export async function createTest(req:Request,res: Response) {
  console.log( "entrei")
  const body : ICreateTest= req.body ;
  const userId : number =  res.locals.tokenDecoded;

  const insertedTest = await testService.createTest(body,userId) 
  res.status(201).send(insertedTest)
}