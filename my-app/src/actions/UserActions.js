import axios from 'axios';
import { server } from '../store';

 
export const login =(email,password)=> async dispatch =>{
    try{
        dispatch({type:'loginRequest'});
        console.log('running');
        const {data} =await axios.post(
            `https://tictac-toe-backend.onrender.com/api/v1/login`,
            {email,password}
        )
        console.log('unning');
       if(!data.status){
        dispatch({type:'loginFail',payload:data.msg});
       }
       else{
        dispatch({type:'loginSuccess',payload:data});
       }
        

    }
    catch(error){
        dispatch({type:'loginFail',payload:error.response.data.message});

    }


}

export const register= (name,email,password)=> async dispatch =>{
    try{
        dispatch({type:'registerRequest'});
        const {data}=await axios.post(`${server}/register`,
            {name,email,password},
        )
        if(data.status){
            
            dispatch({type:'registerSuccess',payload:data});
        }
        else{
           
            dispatch({type:'registerFail',payload:data.msg});
            console.log('error');

        }
       
    }
    catch(error){
        dispatch({type:'registerFail',payload:error.response.data.message})
    }
}

export const verify=(otp,userId)=> async dispatch =>{
    try {
        dispatch ({type:'verificationRequest'});
        const {data}= await axios.post(`${server}/verify`,{
            otp,userId
        });
        if(!data.status){
            dispatch({type:'verificationFailure',payload:data.msg});
        }
        else{
            dispatch({type:'verificationSuccess',payload:data});
        }
        
    }
    catch(error){
        dispatch({
            type:'verificationFailure',payload:error.response.data.message
        })
    }
}


export const logout=()=>async dispatch =>{
    try{
        dispatch({type:'logoutRequest'});
        const {data}=await axios.post(`${server}/logout`);
        
        dispatch({type:'logoutSuccess',payload:data.message});

    }
    catch(error){
        dispatch({type:'logoutFailure',payload:error.response.data.message});
    }
}