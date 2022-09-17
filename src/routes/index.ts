import {Router} from "express";
import authRoute from "./authRoute";
import testRoute from "./testRoute";
const router = Router();

router.use(authRoute);
router.use(testRoute);

export default router