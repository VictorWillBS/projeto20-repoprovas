import app from "../../src/app";
import supertest from 'supertest'
import * as testFactory from '../factory/testFactory'
import * as userFactory from '../factory/userFactory'
import prisma from '../../src/database/database'
import tokenFactory from "../factory/tokenFactory";

beforeEach(async()=>{
  await prisma.$executeRaw`TRUNCATE  TABLE "users"`
})
afterAll(()=>{
  prisma.$disconnect
})

describe('Test testRoute POST /test/create ',()=>{
  it('Test Create Correct Data test expect 201',async()=>{
    const userData = userFactory.createUserAllowed()
    await supertest(app).post('/signup').send(userData)
    const {text:token} = await supertest(app).post('/signin').send(userData)
    const testData =  testFactory.testAllowed()
    const result = await supertest(app).post('/test/create').send(testData).set('Authorization', `Bearer ${token}`) 
    console.log(result.text)
    expect(result.status).toBe(201)
  })
  it('Test create Incorrect Data test expect 400',async()=>{
    const userData = userFactory.createUserAllowed()
    await supertest(app).post('/signup').send(userData)
    const {text:token} = await supertest(app).post('/signin').send(userData)

    const testData = testFactory.testNotAllowed()
    const result = await supertest(app).post('/test/create').send(testData).set('Authorization', `Bearer ${token}`) 
    expect(result.status).toBe(400)
  })
  it('Test Create Duplicate Data Test expect 409',async()=>{
    const userData = userFactory.createUserAllowed();
    const token = await tokenFactory(userData);
    const testData = testFactory.testAllowed();
    await supertest(app).post('/test/create').send(testData).set('Authorization', `Bearer ${token}`);
    const result = await supertest(app).post('/test/create').send(testData).set('Authorization', `Bearer ${token}`);
    expect(result.status).toBe(409);
  })
  it('Test Create Data Test No Parsing Token expect 401',async()=>{
    const testData = testFactory.testAllowed()
    const result = await supertest(app).post('/test/create').send(testData)
    expect(result.status).toBe(401)
  })
})