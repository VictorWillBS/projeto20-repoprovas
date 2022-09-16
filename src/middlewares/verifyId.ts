import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default function verifyId(req:Request,res:Response, next:NextFunction){
  const id:string = req.params.id
  const parseIdNumber  = Number(id)
  if(isNaN(parseIdNumber)){
    return res.status(400).send('Invalid Id.')
  }
  return next()
}