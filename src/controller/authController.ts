import { Request,Response } from "express";
import { userData } from "../types/authTypes";
import * as authService from '../services/authService'
export async function signup(req:Request,res:Response){
  const body : userData = req.body;
  const user = await authService.insertUser(body);
  res.status(201).send(user);
}

export async function signin(req:Request,res:Response) {
  const body : userData = req.body;
  const token = await authService.userLogin(body);
  res.status(200).send(token)
}