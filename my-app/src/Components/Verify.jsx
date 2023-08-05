import React, { useState } from 'react'
import { verify } from '../actions/UserActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

const Verify = () => {
    const {user}=useSelector((state)=>state.user);
    const [otp,setOtp]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleOtp = (event) =>{
        setOtp(event.target.value);

    }
    const handleVerify= (event)=>{
        event.preventDefault();
        dispatch(verify(otp,user._id));
        navigate('/');
        
    }
  return (
    <div className='verify-box'>
    <div className='verify-container'>
    <div className='verify-item'>
       <h1>OTP Verification </h1>
       </div>
       <div className='verify-item'>
        <input type='otp' 
        className='verify-input'
        value={otp}
        placeholder='Enter OTP'
        onChange={handleOtp}
        />
        </div>

        <div className='verify-item'>
        <button type='submit'
        onClick={handleVerify}
        >
            Verify
        </button>

        </div>
        </div>
    </div>
  )
}

export default Verify;