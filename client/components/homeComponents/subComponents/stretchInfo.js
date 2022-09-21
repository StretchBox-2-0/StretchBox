import React from 'react';
import '../../../stylesheets/stretchinfo.scss';

// const favoriteButton = () => {
//   console.log('favorite button works');
// //   fetch('// to add path to database', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(name: e.target.value.name, muscle: e.target.value.muscle, instructions: e.target.value.instructions),
// //   })
// //   .then ((data) => data.json())
// //   .then ((data) => {
// //     // do something with data
// //    const currentRefresh = !refresh;
// //    setRefresh(currentRefresh)
// //   })
  
// };


const StretchInfo = ({ value, favoriteButton }) => {
  console.log(value);
  return (
    <div className="stretch-info">
      <div className="name-muscle">
        <p><strong>Name:</strong> {value.name}</p>
        <p><strong>Muscle:</strong> {value.muscle}</p>
      </div>
      <div className="instructions">
        <p><strong>Instructions:</strong> {value.instructions}</p>
      </div>
      <button value={value} onClick={(e) => {favoriteButton(e)}}>Favorite</button>
    </div>
  );
};

export default StretchInfo;