import {Router} from 'express';
import validSchema from '../middlewares/validSchema';
import verifyToken from '../middlewares/validToken';
import testSchema from '../utils/schemas/testSchema';
import * as testController from '../controller/testController'
const testRoute = Router();

testRoute.post('/test/create',verifyToken,validSchema(testSchema),testController.createTest)

export default testRoute