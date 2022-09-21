import React from 'react';
import '../../stylesheets/stretchDisplay.scss';
import StretchDisplayWindow from  './subComponents/stretchDisplayWindow';

const StretchDisplay = ({value, handleFavoriteButton}) => {
  return (

    <div className="stretchDisplay">
      <h3>Display For Selected Stretches</h3>
      <StretchDisplayWindow value={value} handleFavoriteButton = {handleFavoriteButton} />
    </div>
  );
};

export default StretchDisplay;


