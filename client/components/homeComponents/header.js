import React from 'react';
import Logo from '../../assets/brand-logo.png';
import '../../stylesheets/header.scss';
import Login from '../login';

const Header = (handleClickLogin) => {
  return (
    <div className='headerContainer'>

      <div className='logo'>
        <img src={Logo} />
      </div>
      <div className='loginbox'>
        <Login loginButton = {handleClickLogin} />
      </div>
    </div>
  );
};

export default Header;