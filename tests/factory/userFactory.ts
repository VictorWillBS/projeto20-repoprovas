import { faker } from "@faker-js/faker";
export function createUserAllowed (){
  const email:string = fakeEmail();
  const password : string = fakePassword(15);
  return {
    email,
    password
  }
}
export function createUseNotAllowed (){
  const email:string = fakePassword(10);
  const password : string =fakePassword(5);
  return {
    email,
    password
  }
}

 function fakeEmail(){
  const email:string = 'abc@abc.com';
  return email
}

 function fakePassword(wordLength:number){
  const password:string = faker.internet.password(wordLength);
  return password
}