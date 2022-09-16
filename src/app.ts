import cors from 'cors';
import express,{json} from 'express';
import 'express-async-errors'
import router from './routes';
import errorHandle from "./utils/errorFunctions/errorHandle";
const  app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandle);

export default app