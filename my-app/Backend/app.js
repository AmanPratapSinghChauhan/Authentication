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
    origin: 'https://tictac-toe-frontend-jddf.onrender.com',
    credentials: true,
    methods: [ "POST"],
  })
);

app.options('*', cors({
  origin: 'https://tictac-toe-frontend-jddf.onrender.com'
}));


app.use(cookieParser());


app.use('/api/v1',userRoutes);
export default app;
