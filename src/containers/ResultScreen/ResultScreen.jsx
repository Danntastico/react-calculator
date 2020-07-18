import React, { useContext } from 'react';
import { OpContext } from '../../operations/OpContext';

export const ResultScreen = () => {
  const {
    state: { currentValue },
  } = useContext(OpContext);

  return (
    <div>
      <div className='result__screen'>
        <h2>{currentValue}</h2>
      </div>
    </div>
  );
};
