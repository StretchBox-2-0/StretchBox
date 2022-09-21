import React from 'react';

const Signup = ({setID}) => {
  const handleClickSignup = (e) => {
    console.log(e.target.form[0].value);
    // this is username^
    console.log(e.target.form[1].value);
    // this is password^
    e.preventDefault();
    console.log('handle click signup works');
    const username = e.target.form[0].value;
    const password = e.target.form[1].value;
    // setLoginInfo({ username, password });
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((data) => data.json())
      .then((data) => {
        //set the id in state to be used in future components
        setID(data.userId);
        // TBD depending on how the data looks, maybe look at diff key
        e.target.form[0].value = '';
        e.target.form[1].value = '';
      });
  };


  return (
    <div className="signup">
      <form id='signup' onClick={(e) => handleClickSignup(e)}>
        <label>Username:</label>
        <input placeholder='Username'></input>
        <label>Password:</label>
        <input type='password' placeholder='Password'></input>
        <input type='submit' value='Signup'></input>
      </form>
    </div>

  );
};

export default Signup;