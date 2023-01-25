import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user';
import roleRoutes from './routes/role';
import bodyParser from 'body-parser';

const app = express();
app.use(cors({origin: true}));
app.use(bodyParser.json())

app.use("/", userRoutes);
app.use("/", roleRoutes)

export {app}

