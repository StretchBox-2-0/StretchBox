import React, {useNavigate} from 'react';

const Signup = ({setID}) => {
  const handleClickSignup = (e) => {
    e.preventDefault();
    //take input fields and save to variables for request body
    const username = e.target[0].value;
    const password = e.target[1].value;

    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((data2) => data2.json())
      .then((response) => {

        //set the id in state to be used in future components
        setID(response);

        // reset input fields to blank
        e.target[0].value = '';
        e.target[1].value = '';
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };


  return (
    <div className="signup">
      <form id='signup' onSubmit={(e) => handleClickSignup(e)}>
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