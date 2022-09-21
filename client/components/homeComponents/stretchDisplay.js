import React from 'react';
import '../../stylesheets/stretchDisplay.scss';
import StretchDisplayWindow from './subComponents/stretchDisplayWindow';

const StretchDisplay = ({ value, pgRefresh, currRefresh }) => {
  return (

    <div className="stretchDisplay">
      <h3>Display For Selected Stretches</h3>
      <StretchDisplayWindow value={value} pgRefresh={pgRefresh} currRefresh={currRefresh} />
    </div>
  );
};

export default StretchDisplay;


