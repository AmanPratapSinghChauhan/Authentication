import {createReducer} from '@reduxjs/toolkit';
export const userReducer=createReducer(
    {},
    {
    loginRequest: state => {
        state.loading = true;
      },
      loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.isVarified = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      },
      loginFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.isVarified = true;
        state.error = action.payload;
      },
  
      registerRequest: state => {
        state.loading = true;
      },
      registerSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.isVarified = false;
        state.user = action.payload.user;
        state.message = action.payload.message;
      },
      registerFail: (state, action) => {
        state.loading = false;
        state.isVarified = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
      verificationRequest: (state)=>{
        state.loading=true;
      },
      verificationSuccess: (state,action) =>{
        state.loading=false;
        state.isVarified=true;
        state.user=action.payload.user;
        state.message=action.payload.message;

      },
      verificationFailure:(state,action )=>{
        state.loading=false;
        state.isVarified=false;
        state.error=action.payload;
      },
      logoutRequest: state => {
        state.loading = true;
      },
      logoutSuccess: (state, action) => {
        state.loading = false;
        state.isVarified = true;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
      },
      logoutFail: (state, action) => {
        state.loading = false;
        state.isVarified = true;
        state.isAuthenticated = true;
        state.error = action.payload;
      },

      clearError: state =>{
        state.error=null;
      },
      clearMessage: state =>{
        state.message=null;
      }
    }
)