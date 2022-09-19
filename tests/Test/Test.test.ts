import app from "../../src/app";
import supertest from 'supertest'
import * as testFactory from '../factory/testFactory'
import * as userFactory from '../factory/userFactory'
import prisma from '../../src/database/database'
import tokenFactory from "../factory/tokenFactory";

beforeEach(async()=>{
  await prisma.$executeRaw`TRUNCATE  TABLE "users"`
});
afterAll(()=>{
  prisma.$disconnect
});


describe('Test testRoute POST /test/create ',()=>{
  it('Test Create Correct Data test expect 201',async()=>{
    const userData = userFactory.createUserAllowed();
    const token = await tokenFactory(userData);
    const testData =  testFactory.testAllowed();
    const result = await supertest(app).post('/test/create').send(testData).set('Authorization', `Bearer ${token}`) ;
    expect(result.status).toBe(201);
  })
  it('Test create Incorrect Data test expect 400',async()=>{
    const userData = userFactory.createUserAllowed();
    const token = await tokenFactory(userData);
    const testData = testFactory.testNotAllowed();
    const result = await supertest(app).post('/test/create').send(testData).set('Authorization', `Bearer ${token}`) ;
    expect(result.status).toBe(400);
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
    const testData = testFactory.testAllowed();
    const result = await supertest(app).post('/test/create').send(testData);
    expect(result.status).toBe(401);
  })
});

describe('Test testRoute Get /tests/teacher',()=>{
  it('Send Token. Expect 200',async()=>{
    const userData = userFactory.createUserAllowed();
    const token = await tokenFactory(userData);
    const testData = testFactory.testAllowed();
    await supertest(app).post('/test/create').send(testData).set('Authorization', `Bearer ${token}`) ;
    const result = await supertest(app).get('/tests/teachers').send().set('Authorization',`Bearer ${token}`);
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Object)

  });
  it('No Send Token. Expect 401',async()=>{
    const userData = userFactory.createUserAllowed();
    const token = await tokenFactory(userData);
    const testData = testFactory.testAllowed();
    await supertest(app).post('/test/create').send(testData).set('Authorization',`Bearer ${token}`);
    const result = await supertest(app).get('/tests/teachers').send();
    expect(result.status).toBe(401);
  })
});
  
describe('Test testRoute Get /tests/discipline',()=>{
  it('Send Token. Expect 200',async()=>{
    const userData = userFactory.createUserAllowed();
    const token = await tokenFactory(userData);
    const testData = testFactory.testAllowed();
    await supertest(app).post('/test/create').send(testData).set('Authorization',`Bearer ${token}`) ;
    const result = await supertest(app).get('/tests/teachers').send().set('Authorization',`Bearer ${token}`);
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Object)
  });
  it('No Send Token. Expect 401',async()=>{
    const userData = userFactory.createUserAllowed();
    const token = await tokenFactory(userData);
    const testData = testFactory.testAllowed();
    await supertest(app).post('/test/create').send(testData).set('Authorization',`Bearer ${token}`);
    const result = await supertest(app).get('/tests/discipline').send();
    expect(result.status).toBe(401);
  });
});