import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (<>
    <Header/>
    <div className='body'>
    <div className='body-box'>
    <div className='body-item'>
      Tic Tac Toe
    </div>
    <div className='body-item'>
      <img  className='home-img'src='https://www.thegreatapps.com/application/upload/Apps/2016/07/tic-tac-toe-with-chat-177.png' alt='tictactoe image'/>
    </div>
    
    <div className='body-item'>
     <Link to={'/tictactoe'} className='body-item-link'>Play</Link>
    </div>

    </div>
   
    
        

    </div>
    <Footer/>
    </>
  )
}

export default Home