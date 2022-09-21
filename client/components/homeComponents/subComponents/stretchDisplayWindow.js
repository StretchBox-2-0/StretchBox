import React, { useEffect, useState } from 'react';
import '../../../stylesheets/stretchDisplayWindow.scss';
import StretchInfo from './stretchInfo';

const StretchDisplayWindow = ({ value, pgRefresh, currRefresh }) => {
  const [stretches, setStretches] = useState([]);
  const [stretchCounter, setStretchCounter] = useState(0);

  useEffect(() => {
    const stretchArr = stretches;
    if (value) {
      for (let i = 0; i < value.length; i++) {
        stretchArr.push(<StretchInfo 
          key = {stretchCounter}
          value = {value[i]}
          exerciseID = {value[i].id}
          name =  {value[i].name}
          muscle = {value[i].muscle}
          instructions={value[i].instructions}
          pgRefresh={pgRefresh}
          currRefresh={currRefresh} 
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