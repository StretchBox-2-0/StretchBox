import React from 'react';
import '../../../stylesheets/stretchinfo.scss';

const SavedStretchInfo = ({ stretch, pgRefresh, currRefresh }) => {

  let muscle = '';
  for (const key in stretch) {
    if (stretch[key] )muscle = key;
  }

  const deleteButton = (stretchid, name) => {
    console.log('delete button works');
    fetch('/user/fav', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stretchid: stretchid, name: name }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('successfully deleted');
        pgRefresh(!currRefresh);
      });
  };

  return (
    <div className="stretch-info">
      <div className="name-muscle">
        <p><strong>Name:</strong> {stretch.stretchname}</p>
        <p><strong>Muscle:</strong> {muscle}</p>
      </div>
      <div className="instructions">
        <p><strong>Instructions:</strong> {stretch.instructions}</p>
      </div>
      <button value={stretch} onClick={() => { deleteButton(stretch.id, stretch.name); }}>Favorite</button>
    </div>
  );
};

export default SavedStretchInfo;