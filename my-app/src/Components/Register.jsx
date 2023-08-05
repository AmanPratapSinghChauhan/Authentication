import React, {  useState } from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';

import {register} from '../actions/UserActions';
import './Authentication.css';

const Register = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [name,setName]=useState('');
  const toastOptions={
    duration:5000,
  }
  const dispatch =useDispatch();
  const navigate=useNavigate();
  
  const handleRegisterValidation = (email,password,confirmPassword) => {
    if (email === ""||password===""||confirmPassword==="") {
      toast.error("Please enter all fields.", toastOptions);
      return false;
    }
    else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } 
    else if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    }
    

    return true;
  };

  const handleRegister=(event)=>{
    event.preventDefault();
    if(handleRegisterValidation(email,password,confirmPassword)){
      dispatch(register(name,email,password));
    navigate('/register');
    }
    
  }
  return (
    <>
    <div className='authenticate-form'>
    <div className='authenticate-left '>
    <div className='register-left'>
    <span>
        Sign In 
      </span>
      <br/>
      <span>
        To Join<br/> Our <br/>Community
      </span>

    </div>
      

    </div>
    <div className='authenticate-right'>
       <h1 > Sign In</h1>
       <div className='form-item'>
       <input type='text'
       value={name}
       placeholder='Name'
       onChange={(e)=>{setName(e.target.value)}}
       />

       </div>
        <div className='form-item'>
           <input type='email' 
            value={email}
            placeholder='Email'
              onChange={(e)=>{setEmail(e.target.value)}}
            />
        </div>
        <div className='form-item'>
           <input type='password'
           placeholder='Password'
            value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
        </div>
        <div className='form-item'>
           <input type='password'
          value={confirmPassword}
          placeholder='Confirm Password'
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
          />

        </div>
        <div className='form-item'>
        <button type='submit' onClick={handleRegister}>Sign In</button>

        </div>
        <div className='authenticate-referal'>
        <span> Have an account? <Link to={'/login'} className='referal-text'>Log In</Link></span>
      </div>
      <div className='authenticate-referal'>
      <Link to={'/'} className='referal text'>Go Back</Link>

      </div>
        </div>
    </div>
    <Toaster />
    </>
  )
}

export default Register