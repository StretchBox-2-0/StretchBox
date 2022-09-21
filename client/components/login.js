import React from 'react';

const Login = (handleClickLogin) => {
  return (
    <div className="login">
      <form id='loginForm'> 
        <label>Username:</label> 
        <input placeholder='Username'></input>
        <label>Password:</label>  
        <input type='password' placeholder='Password'></input>
        <input type='submit' value='Login'></input>
        {/* <button onClick={(e) => favoriteButton()}>fave button test</button> */}

      </form>
    </div>

);
};

export default Login;