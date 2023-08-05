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

const allowedOrigins = ['https://tictac-toe-frontend-jddf.onrender.com'];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(cookieParser());


app.use('/api/v1',userRoutes);
export default app;
