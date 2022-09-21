import React from 'react';
import '../../../stylesheets/savedStretchDisplay.scss';
import SavedStretchInfo from './savedStretchInfo';

const SavedStretchDisplay = ({ favoriteStretches, setRefresh, refresh }) => {
  const favorites = [];
  for (let i = 0; i < favoriteStretches.length; i++) {
    //same as before, pass down setFavorites
    favorites.push(<SavedStretchInfo
      key={`${i}+saved`}
      stretch={favoriteStretches[i]}
      setRefresh={setRefresh}
      refresh={refresh}
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