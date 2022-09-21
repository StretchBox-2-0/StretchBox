import React, { useNavigate } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/brand-logo.png';
import '../../stylesheets/header.scss';
import Login from '../login';


const Header = ({ ID }) => {

  // if( ID !== undefined ) { 
  //   return (
  //     <div> Logged in, test </div>
  //   )
  // }
  return (
    <div className='headerContainer'>
      
      <div className='logo'>
        <img src={Logo} />
      </div>
      <div id='buttonBox'>
      <div className='loginbutton'>
        <Link to="/login">Login</Link>
      </div>
      <div className='signupbutton'>
        <Link to= "/signup">Signup</Link>

      </div>
    </div>
    </div>
  );
};

export default Header;