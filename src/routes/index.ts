import {Router} from "express";
import authRoute from "./authRoute";

const router = Router();

router.use(authRoute);

export default router