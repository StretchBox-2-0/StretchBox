import React, {useState} from 'react';
import '../../stylesheets/savedStretches.scss';
import SavedStretchDisplay from './subComponents/savedStretchDisplay';

const SavedStretches = ({favoriteStretches, deleteButton}) => {
  return (
    <div className='savedStretchContainer'>
      <h3>Saved Stretches</h3>
      <SavedStretchDisplay favoriteStretches ={favoriteStretches} deleteButton = {deleteButton} />
    </div>
  );
};

export default SavedStretches;