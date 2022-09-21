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
        <button onClick = {() => {this.handleClickLogin}}> handle click test</button>
        {/* <button onClick={(e) => favoriteButton()}>fave button test</button> */}

        <Login handleClickLogin={handleClickLogin} />
      </div>
    </div>
  );
};

export default Header;