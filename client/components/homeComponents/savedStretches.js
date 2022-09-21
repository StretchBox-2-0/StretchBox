import React, { useState } from 'react';
import '../../stylesheets/savedStretches.scss';
import SavedStretchDisplay from './subComponents/savedStretchDisplay';

const SavedStretches = ({ favoriteStretches, setRefresh, refresh }) => {
  return (
    <div className='savedStretchContainer'>
      <h3>Saved Stretches</h3>
      {/* pass it down one more time, dont forget to put it as a prop as well */}
      <SavedStretchDisplay favoriteStretches={favoriteStretches} setRefresh={setRefresh} refresh={refresh} />
    </div>
  );
};

export default SavedStretches;