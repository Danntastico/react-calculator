import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { OpContext } from '../../operations/OpContext';
import { types } from '../../types/types';

export const Key = ({ value, type }) => {
  const { dispatch } = useContext(OpContext);
  const handleClick = () => {
    if (type === types.keyNum) {
      dispatch({
        type: types.addDigit,
        payload: {
          val: value,
        },
      });
    } else {
      dispatch({
        type: value,
        payload: {
          val: '',
        },
      });
    }
  };

  return (
    <div>
      <button className={`keypad__key ${type}`} onClick={handleClick}>
        {value}
      </button>
    </div>
  );
};

Key.propTypes = {
  value: PropTypes.string,
};
