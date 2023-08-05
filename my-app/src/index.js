import React,{StrictMode} from 'react';
import  ReactDOM  from 'react-dom/client';
import {Provider as ReduxProvider} from 'react-redux';
import store from "./store";
import App from './App';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
    <StrictMode>
    <ReduxProvider store={store}>
    <App />

    </ReduxProvider>
    </StrictMode>

);
