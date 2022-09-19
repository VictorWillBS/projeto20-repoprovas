import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as tokenRepository from '../repositories/tokenRepository'
dotenv.config();

export default async function verifyToken(req:Request,res:Response, next:NextFunction){
  const token:string|any = req.headers.authorization;
  console.log('token recebido');
  console.log(token)
  if(!token||!token.startsWith("Bearer")){
    console.log('token n comeca com bearer ou n exist');
    return res.status(401).send('Invalid Token.')
  }
  const JWT_SECRET : string|any= process.env.JWT_SECRET ;
  
  try{
    const tokenToValid = token.replace('Bearer ',"")
    const tokenIsValid: string|any= jwt.verify(tokenToValid,JWT_SECRET);
    const user=await tokenRepository.getUserById(tokenIsValid.id)
    if(!user){
    console.log('user n exist');
    return res.status(401).send('Invalid Token.')}
    res.locals.tokenDecoded = tokenIsValid
    next()
  }catch(error){
    res.status(401).send(error)
  }
}