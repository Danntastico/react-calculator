import React, { useContext } from 'react';
import { OpContext } from '../../operations/OpContext';

export const ResultScreen = () => {
  const {
    state: { display, isFirstNumReady, firstNum },
  } = useContext(OpContext);

  const onScreen = !isFirstNumReady ? display : firstNum;
  return (
    <div>
      <div className='result__screen'>
        <h2>{onScreen}</h2>
      </div>
    </div>
  );
};
