import app from "../../src/app";
import supertest from "supertest";

export default async function tokenFactory(userData:{email:string,password:string}) {
  await supertest(app).post('/signup').send(userData);
  const result = await supertest(app).post('/signin').send(userData);
  return result.text
}