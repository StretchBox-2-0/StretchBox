import React from 'react';
import '../../../stylesheets/savedStretchDisplay.scss';
import SavedStretchInfo from './savedStretchInfo';

const SavedStretchDisplay = ({ favoriteStretches, pgRefresh, currRefresh }) => {
  const favorites = [];
  for (let i = 0; i < favoriteStretches.length; i++) {
    favorites.push(<SavedStretchInfo
      key={`${i}`}
      stretch={favoriteStretches[i]}
      pgRefresh={pgRefresh}
      currRefresh={ currRefresh}
    />);
  }
  return (
    <div className='displayWindow'>
        Saved stretches will be rendered here
      {favorites}
        
    </div>
  );
};

export default SavedStretchDisplay;