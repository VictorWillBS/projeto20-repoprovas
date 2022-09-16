import {Request,Response,NextFunction } from "express";
import discoverStatusCode from "./discoverStatusCode";

export default async function errorHandle(error:any,req:Request, res:Response,next:NextFunction){
  if(error){
    const statusCode=discoverStatusCode(error.code);
    return  res.status(statusCode).send(error.message);
  }

  res.status(500).send('Internal Server Error');
}