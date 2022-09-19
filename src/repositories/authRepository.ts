import prisma from "../database/database";
import { userData } from "../types/authTypes";

export async function getUserByEmail(email:string) {
  const user = await prisma.users.findUnique({where:{email:email}})
  return user
}

export async function createUser(userData:userData,newPassword:string) {
  console.log('criando user...')
  console.log({...userData})
  try {
    const user = await prisma.users.create({data:{email:userData.email,password:newPassword}})
    console.log(user)
    return user
  } catch (error) {
    console.log(error)
    
  }
  
}
