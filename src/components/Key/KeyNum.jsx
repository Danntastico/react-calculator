import React, { useContext } from 'react';
import { OpContext } from '../../operations/OpContext';
import { types } from '../../types/types';

export const KeyNum = ({ value }) => {
  const { dispatch } = useContext(OpContext);
  const handleClick = () => {
    dispatch({
      type: types.addDigit,
      payload: value,
    });
  };

  return (
    <div>
      <button className={`keypad__key keyNum`} onClick={handleClick}>
        {value}
      </button>
    </div>
  );
};
