import React from 'react';
import '../../../stylesheets/stretchinfo.scss';




const StretchInfo = ({ value, exerciseID, name, muscle, instructions, pgRefresh, currRefresh }) => {
  
  const favoriteButtonNew = (exerciseID, name) => {
    console.log(exerciseID);
    // console.log(e.target.value.id);
    fetch('/user/fav', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stretchid: exerciseID, name: name }),
    })
      .then ((data) => data.json())
      .then ((data) => {
        console.log('favorite added')
        pgRefresh(!currRefresh);
      });
  };

  return (
    <div className="stretch-info">
      <div className="name-muscle">
        <p><strong>Name:</strong> {name}</p>

        <p><strong>Muscle:</strong> {muscle}</p>
      </div>
      <div className="instructions">
        <p><strong>Instructions:</strong> {instructions}</p>
      </div>
      <button value={value} onClick={() => {favoriteButtonNew(exerciseID, name)}}>Favorite</button>
    </div>
  );
};

export default StretchInfo;