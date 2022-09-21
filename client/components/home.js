/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import RegionSelector from './homeComponents/regionSelector';
import StretchDisplay from './homeComponents/stretchDisplay';
import SavedStretches from './homeComponents/savedStretches';
import Routines from './homeComponents/routines';
import Header from './homeComponents/header';
import Login from './login';
import '../stylesheets/home.scss';


const Home = ({ID}) => {
  const [stretchData, setStretchData] = useState('');
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

  const favoriteButton = (e) => {
    console.log('favorite button works');
      fetch('/user/fav', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stretchid: e.target.value.id, name: e.target.value.name }),
      })
      .then ((data) => data.json())
      .then ((data) => {
        // do something with data
       const currentRefresh = !refresh;
        setRefresh(currentRefresh);
      })

  };

  return (
    <>
    
      <Header handleClickLogin />
      <div id="main-flex">
        <div className="dynamic-direction">
          <RegionSelector value={setStretchData}/>
          <StretchDisplay value={stretchData} handleFavoriteButton = {favoriteButton} />
          <SavedStretches />
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