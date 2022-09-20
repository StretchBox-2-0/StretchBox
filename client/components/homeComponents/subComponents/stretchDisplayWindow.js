import React, { useEffect, useState } from 'react';
import '../../../stylesheets/stretchDisplayWindow.scss';
import StretchInfo from './stretchInfo';

const StretchDisplayWindow = ({value, handleFavoriteButton}) => {
  const [stretches, setStretches] = useState([]);
  const [stretchCounter, setStretchCounter] = useState(0);

  useEffect(() => {
    console.log(value);
    const stretchArr = stretches;
    if (value) {
      for (let i = 0; i < value.length; i++) {
        stretchArr.push(<StretchInfo 
          key = {stretchCounter}
          name =  {value[i].name}
          muscle = {value[i].muscle}
          instructions = {value[i].instructions}
          favoriteButton = {handleFavoriteButton}
        />);
      }
    }
    setStretches(stretchArr);
    setStretchCounter(stretchCounter + 1);
  }, [value]);

  return(
    <div className="StretchDisplayWindow">
      <button className="clear-button" onClick={(e) => setStretches([])}>CLEAR</button>
      <div>
        {stretches}
      </div>
    </div>
  );
};

export default StretchDisplayWindow;