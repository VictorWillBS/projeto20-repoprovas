import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
export function gerateJwt(data:number){
  const secret :string = process.env.JWT_SECRET
  const config  = { expiresIn: 60*60*24*30 }
  const content = {id:data}
  const newToken = jwt.sign(content,secret,config)

  return newToken
}
