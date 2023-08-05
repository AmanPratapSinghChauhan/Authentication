import React,{useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Verify from './Components/Verify';
import toast,{Toaster} from 'react-hot-toast';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {ProtectedRoute} from 'protected-route-react';
import Tictactoe from './Components/Tictactoe';


const App = () => {

  const {  message, error,isAuthenticated } =
    useSelector((state) => state.user);
  // const Navigate = useNavigate();
  // const { courses } = useSelector(
  //   (state) => state.course
  // );

  const dispatch = useDispatch();
  useEffect(() => {
    if (error === "Cannot read properties of null (reading '_id')") {
      toast("Late to Verifying OTP!! Register Again");
      dispatch({ type: "clearError" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/tictactoe' element={<Tictactoe/>}/>
        <Route path='/register' element={
          <ProtectedRoute
           isAuthenticated={!isAuthenticated}
           redirect='/verify'>
           <Register/>
           </ProtectedRoute>
        }

        />
        <Route path='/verify' element={ <Verify/>}/>
      </Routes>


      <Toaster
            toastOptions={{
              duration: 5000,
            }}
          />
   
    

    </Router>
    </>
    
  )
}

export default App;