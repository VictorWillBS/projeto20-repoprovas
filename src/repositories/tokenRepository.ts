import prisma from "../database/database";
import { Users } from "@prisma/client";
export async function getUserById(id:number){
  const user : Users= await prisma.users.findUnique({where:{id}})
  return user
}