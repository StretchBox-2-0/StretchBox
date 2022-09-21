import React from 'react';
import '../../../stylesheets/stretchinfo.scss';

//dont forget to add it as a prop
const SavedStretchInfo = ({ stretch, setRefresh, refresh }) => {

  let muscle = '';
  for (const key in stretch) {
    if (stretch[key] === true) muscle = key;
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
        console.log(`successfully deleted ${data}`);

        //const filteredStretches = stretches.filter(excluding the ${data})
        //setSavedStretches(filteredStretches)
        const newRefresh = !refresh
        setRefresh(newRefresh);
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
      <button value={stretch} onClick={() => { deleteButton(stretch.stretch_id, stretch.name); }}>Delete</button>
    </div>
  );
};

export default SavedStretchInfo;