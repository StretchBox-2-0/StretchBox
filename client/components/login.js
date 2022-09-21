import React from 'react';

const Login = ({setID}) => {
  const handleClickLogin = (e) => {
    e.preventDefault();
    //get input fields and assign for request body use
    const username = e.target[0].value;
    const password = e.target[1].value;
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((data) => data.json())
      .then((data) => {
        //set the id in state to be used in future components
        setID(data);
        //below 2 lines reset the forms after submit
        e.target[0].value = '';
        e.target[1].value = '';
        //redirect user back to homepage after successful login
        location.href = "/";
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  return (
    <div className="login">
      <form id='loginForm' onSubmit={(e) => handleClickLogin(e)}> 
        <label>Username:</label> 
        <input placeholder='Username'></input>
        <label>Password:</label>  
        <input type='password' placeholder='Password'></input>
        <input type= 'submit' value='Login'></input>

      </form>
    </div>

  );
};

export default Login;