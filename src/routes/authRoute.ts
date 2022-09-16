import {Router} from 'express';
import validSchema from '../middlewares/validSchema'
import authSchema from '../utils/schemas/authSchema';
import * as authController from '../controller/authController'
const authRoute = Router()

authRoute.post('/signup',validSchema(authSchema),authController.signup)
authRoute.post('/signin', validSchema(authSchema),authController.signin)
export default authRoute