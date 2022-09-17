import { Users } from "@prisma/client";
import * as authRepository from "../repositories/authRepository"
import { userData } from "../types/authTypes";
import * as criptFunctions from "../utils/assetsFunctions/cryptData"
import * as jwtFunctions from '../utils/assetsFunctions/jwtFunctions'


export async function insertUser(userdata : userData) {
  const userExist = await getUserByEmail(userdata.email)
  if(userExist){
    throw{code:'Conflict', message:'User already exist.'}
  }
  const newPassord = criptFunctions.encriptByHash(userdata.password)
  const user = await authRepository.createUser(userdata,newPassord)
  return user
}

async function  getUserByEmail(email:string) {
  const user = await authRepository.getUserByEmail(email)
  return user
}

export async function userLogin(userdata:userData) {
  const user :Users | any= await getUserByEmail(userdata.email)
  if(!user){
    throw{code:'Unauthorized', message : 'Email or Password is Invalid.'}
  }
  const isSamePassword = criptFunctions.comparePassword(userdata.password,user.password)

  if(!isSamePassword){
    throw{ code:'Unauthorized', message:'Email or Password is Invalid.'}
  }
  const token = jwtFunctions.gerateJwt(user.id) 
  if(!token){
    throw{code : 'Internal Server Erro', message: 'Token error.'}
  }
  return token
}