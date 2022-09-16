import { faker } from '@faker-js/faker';

export function fakeEmail(){
  const email:string = faker.internet.email()
  return email
}

export function fakePassword(wordLength:number){
  const password:string = faker.internet.password(wordLength)
  return password
}