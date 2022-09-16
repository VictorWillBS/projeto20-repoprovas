import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default function verifyToken(req:Request,res:Response, next:NextFunction){


  const token:string|any = req.headers.authorization;
  if(!token.startsWith("Bearer")){
    console.log( 'cai aw')
    return res.status(401).send('Invalid Token.')
  }
  const JWT_SECRET : string|any= process.env.JWT_SECRET ;
  
  try{
    const tokenToValid = token.replace('Bearer ',"")
    const tokenIsValid: string|any= jwt.verify(tokenToValid,JWT_SECRET);
    res.locals.tokenDecoded = tokenIsValid
    next()
  }catch(error){
    res.status(401).send('Invalid Token.')
  }
}