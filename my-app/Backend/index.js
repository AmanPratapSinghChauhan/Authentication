import { connectDB } from './Config/database.js';
import app from './app.js';

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})