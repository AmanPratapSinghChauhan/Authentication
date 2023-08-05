import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path:'./Config/config.env'});
export const connectDB= async () =>{
    mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //  useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

