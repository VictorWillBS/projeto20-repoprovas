import app from "../../src/app";
import supertest from 'supertest'
import * as userFactory from '../factory/userFactory'
import * as testFactory from '../factory/testFactory'
import prisma from '../../src/database/database'
beforeEach(async()=>{
await prisma.$executeRaw`TRUNCATE TABLE "users"`
})

describe('Test my App POST /signup',  ()=>{
  it('Test Create User Expect 201',async()=>{
    const userData = userFactory.createUserAllowed()
    const result = await supertest(app).post('/signup').send(userData)
    console.log(userData)
    expect(result.status).toBe(201)
  })

  it('Test Create User Passing Password TwoTimes Expect 422',async()=>{
    const userData = userFactory.createUseNotAllowed()
    const result = await supertest(app).post('/signup').send(userData)
    expect(result.status).toBe(422)
  })
})

describe('Test my App POST /signin',  ()=>{
  it('Test login User Expect 201',async()=>{
    const userData =await userFactory.createUserAllowed()
    await supertest(app).post('/signup').send(userData)
    const result = await supertest(app).post('/signin').send(userData)
    expect(result.status).toBe(200)
  })

  it('Test Wronglogin User Expect 401',async()=>{
    const userData = userFactory.createUserAllowed()
    await supertest(app).post('/signup').send(userData)
    const newUserData = userFactory.createUserAllowed()
    const result = await supertest(app).post('/signin').send(newUserData)
    expect(result.status).toBe(401)
  })
})
afterAll(()=>{
  prisma.$disconnect
})