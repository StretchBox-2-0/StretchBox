import React, { useNavigate } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/brand-logo.png';
import '../../stylesheets/header.scss';
import Login from '../login';

// const nav = useNavigate();

const Header = ({ ID }) => {
  //this is where navigate function should be
  // const navigate = useNavigate();
  function navigate() {
    nav('/login');
  }

  return (
    <div className='headerContainer'>

      <div className='logo'>
        <img src={Logo} />
      </div>
      <div className='loginbox'>
        {/* navigate{'/login'} */}
        {/* <button onClick= {(e)=> navigate(e)}>Login</button> */}
        <button onClick= {()=> window.location.href = '/login'}>Login</button>
        {/* /* if we do the above window way, it says the page doesnt exist */}
        <Link to= "/login">Login Link</Link>
        <Link to= "/signup">Signup Link</Link>

      </div>
    </div>
  );
};

export default Header;