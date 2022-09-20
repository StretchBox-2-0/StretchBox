import React from 'react';

const Login = (loginButton) => {
  return (
    <div className="login">
      <form> 
        <label>Username:</label> 
        <input placeholder='Username'></input>
        <label>Password:</label>  
        <input type='password' placeholder='Password'></input>
        <button type='submit' onSubmit= { () => loginButton() }>Submit</button>
      </form>
    </div>

  );
};

export default Login;