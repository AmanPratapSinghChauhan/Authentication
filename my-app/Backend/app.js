import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './Routes/userRoutes.js';
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use(cors() );
app.use(cookieParser());

dotenv.config({path:"./Config/config.env",});
app.use('/api/v1',userRoutes);
export default app;
