import React from 'react';
import '../../../stylesheets/stretchinfo.scss';

const SavedStretchInfo = ({ stretch, deleteButton }) => {
  let muscle = '';
  for (const key in stretch) {
    if (stretch[key]) muscle = key;
  }//end of iteration through for in

  return (
    <div className="stretch-info">
      <div className="name-muscle">
        <p><strong>Name:</strong> {stretch.stretchname}</p>
        <p><strong>Muscle:</strong> {muscle}</p>
      </div>
      <div className="instructions">
        <p><strong>Instructions:</strong> {stretch.instructions}</p>
      </div>
      <button value={stretch} onClick={(e) => { deleteButton(e); }}>Favorite</button>
    </div>
  );
};

export default SavedStretchInfo;