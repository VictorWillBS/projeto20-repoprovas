import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
export function encriptByHash(password:string){
  const newPassword = bcrypt.hashSync(password,10);
  return newPassword
}
export function comparePassword(password:string|any, encryptedPassword:string){
  console.log( password)
  const isSame = bcrypt.compareSync(password,encryptedPassword);
  return isSame
}
