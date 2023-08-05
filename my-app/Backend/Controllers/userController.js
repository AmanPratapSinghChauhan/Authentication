import {User} from '../Models/userModel.js';
import  {sendEmail}  from '../utils/sendEmail.js';
import { sendToken } from '../utils/sendToken.js';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
dotenv.config({path:'./Config/config.env'});

export const register= async(req,res,next)=>{
    try{
        // console.log('route is reachable');
        
        const {name,email,password}=req.body;
        if ( !email || !password){
         return res.json({msg:'Please enter all field',status:false});
        }
        let user=await User.findOne({email});
        if(user){
          return res.json({msg:'User already exist', status:false});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const otp =Math.floor(Math.random()*1000000);

         user = await User.create({
            name,
            email,
            password:hashedPassword,
            otp,
            otp_expiry:new Date(Date.now()+process.env.OTP_EXPIRE*60*1000),
        });
        

        
          

  const message = `Verify Your Account Your OTP is ${otp}`;

  

    await sendEmail({
      email: user.email,
      subject: `Typo Verification Email`,
      message,
    });
    sendToken(
      res,
      user,
      `OTP sent to ${user.email} successfully, Valid for 5 minutes.`,
      201
    );

    }
    catch(error){
        return res.json({msg:error.message,status:false});
    }
};

export const verify= async (req,res)=>{
    const {otp,userId}=req.body;
    console.log(userId);
    try{
    console.log('57run');
    const user = await User.findById(userId).select("+otp");
    console.log('59run');
    if (!user){
      return res.json({msg:"User not found in database", status:false});
    } 

    if (user.otp != otp || user.otp_expiry < Date.now()) {
      return res.json({ success: false, msg: "Invalid OTP or has been Expired" });
    }

    user.verified = true;
    user.otp = null;
    user.otp_expiry = null;

    await user.save();

    sendToken(res, user, `Successfully Verified , Welcome ${user.name}`, 200);
  } catch (error) {
    res.json({ success: false, msg: error.message });
  }
};

export const login= async(req,res)=>{
    const {email,password}=req.body;
    
        User.findOne({email}).then(user=>{
        if(!user){
          return res.json({status:false,msg:'Incorrect Email or Password'});
        }
        const isPasswordValid= bcrypt.compare(password,user.password);
        if(!isPasswordValid){
          return res.json({ msg: "Incorrect Email or Password", status: false });
        }
        sendToken(res, user, `Welcome back, ${user.email}`, 200);
      })
    .catch(error=>{
      console.log(error);
    
});
      
    
}

export const logout = async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      status: true,
      message: "Logged Out Successfully ",
    });
};

