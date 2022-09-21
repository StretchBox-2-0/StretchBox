/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import RegionSelector from './homeComponents/regionSelector';
import StretchDisplay from './homeComponents/stretchDisplay';
import SavedStretches from './homeComponents/savedStretches';
import Routines from './homeComponents/routines';
import Header from './homeComponents/header';
import Login from './login';
import '../stylesheets/home.scss';


const Home = () => {
  const [stretchData, setStretchData] = useState('');
  const [ID, setID] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log('fetching');
    fetch(`/favorites/${ID}`)
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, [refresh]);

  //this handle click function handles the onclick in login.js
  const handleClickLogin = (e) => {
    console.log('handle click login works');
    
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username:username, password:password}),
    })
      .then((data) =>data.json())
      .then((data) => {
      //set the id in state to be used in future components
        setID(data.userId);
        // TBD depending on how the data looks, maybe look at diff key
        e.target[0].value = '';
        e.target[0].value = '';
      });
  };

  const favoriteButton = (e) => {
    console.log('favorite button works');
    //   fetch('// to add path to database', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(name: e.target.value.name, muscle: e.target.value.muscle, instructions: e.target.value.instructions),
    //   })
    //   .then ((data) => data.json())
    //   .then ((data) => {
    //     // do something with data
    //    const currentRefresh = !refresh;
    //    setRefresh(currentRefresh)
    //   })

  };

  return (
    <>
    
      <Header handleClickLogin={handleClickLogin} />
      <div id="main-flex">
        <div className="dynamic-direction">
          <RegionSelector value={setStretchData}/>
          <StretchDisplay value={stretchData} handleFavoriteButton = {favoriteButton} />
          <SavedStretches />
          <button onClick={(e) => favoriteButton()}>fave button test</button>
        </div>
        {/* <div class="dynamic-direction">
          <SavedStretches />
          <Routines />
        </div> */}
      </div>
    </>
  );
};

export default Home;