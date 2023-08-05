import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../actions/UserActions';
import toast,{Toaster } from "react-hot-toast";
import Header from './Header';
import './Authentication.css';


const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const toastOptions = {
    duration:5000,
  };
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleEmail=(event)=>{
      setEmail(event.target.value);
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }

  const validateLoginForm = (email,password) => {
    if (email === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };
  const handleLogin=(event)=>{
    if(validateLoginForm(email,password)){
      event.preventDefault();
    dispatch(login(email,password));
    navigate('/');  
    }
  }

  return (
    <>
    <div className='authenticate-form'>
    <div className='authenticate-left'>
    <div className='register-left'>
    <span>
      Log In <br/>To Use <br/> Our<br/> Resources
    </span>

    </div>
    </div>
    
    
    
    <div className='authenticate-right'>
      <h1 >Log In</h1>
      <div className='form-item'>
       <input type='email' onChange={handleEmail} value={email}  className='form-input' placeholder='Email'/>
        
      </div>
      <div className='form-item'>
       <input type='password' onChange={handlePassword} value={password}  className='form-input' placeholder='Password'/>
        
      </div>
      <div className='form-item'>
      <button onClick={handleLogin}>Log In</button>

      </div>
      <div className='authenticate-referal'>
        <span>Don't have an account? <Link to={'/register'} className='referal-text'>Sign In</Link></span>
      </div>
      <div className='authenticate-referal'>
      <Link to={'/'} className='referal text'>Go Back</Link>

      </div>
      </div>
    </div>
      
    <Toaster/>

</>
  )
}

export default Login;
