import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { OpContext } from '../../operations/OpContext';
import { types } from '../../types/types';

export const KeyFunc = ({ value, type }) => {
  const {
    state: { partialResult },
    dispatch,
  } = useContext(OpContext);

  const handleClick = () => {
    dispatch({
      type: value,
      payload: partialResult,
    });
  };
  const label = value === 'del' ? <i className='fas fa-backspace'></i> : value;
  return (
    <div>
      <button className={`keypad__key ${type}`} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

KeyFunc.propTypes = {
  value: PropTypes.string,
};
