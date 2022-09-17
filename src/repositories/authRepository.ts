import prisma from "../database/database";


import { userData } from "../types/authTypes";

export async function getUserByEmail(email:string) {
  
  const user = await prisma.users.findUnique({where:{email:email}})
  console.log('passei get user repo')
  return user
}

export async function createUser(userData:userData,newPassword:string) {
  const user = await prisma.users.create({data:{email:userData.email,password:newPassword}})
  console.log('passei create repo')
  return user
}
