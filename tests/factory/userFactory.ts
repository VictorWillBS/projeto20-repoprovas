import * as fakerData from '../fakerData/fakerUserData'
export function createUserAllowed (){
  const email:string = fakerData.fakeEmail()
  const password : string = fakerData.fakePassword(15)
  return {
    email,
    password
  }
}
export function createUseNotAllowed (){
  const email:string = fakerData.fakePassword(10)
  const password : string = fakerData.fakePassword(5)
  return {
    email,
    password
  }
}