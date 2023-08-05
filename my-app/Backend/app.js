import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './Routes/userRoutes.js';
const app=express();
dotenv.config({path:"./Config/config.env",});
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000" ,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);



app.use(cookieParser());


app.use('/api/v1',userRoutes);
export default app;
