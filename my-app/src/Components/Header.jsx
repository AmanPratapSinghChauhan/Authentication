import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/UserActions';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import './Home.css';

const Header = () => {
  const {isAuthenticated}=useSelector((state)=>state.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleLogout= (event)=>{
    event.preventDefault();
    dispatch(logout());
    navigate('/');
  


  }
  return (
    <>
    <nav className='navbar'>
    <div className='nav-item'>
    <Link to={'/'} className='nav-item-link'>Home</Link>
    </div>
    <div className='nav-item'>
       <Link to ={'/tictactoe'} className='nav-item-link'>TicTacToe</Link>
    </div>
   {!isAuthenticated?
    <div className='nav-button' >
    <Link to={'/login'} className='nav-item-button '> Login</Link>
    </div>
    :
    <div className='nav-button'><Link className='nav-item-button' onClick={handleLogout}>Logout</Link>
    </div>
    }
    
  
    
    
    </nav>
    </>
  )
}

export default Header;