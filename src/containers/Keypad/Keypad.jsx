import React, { useContext } from 'react';
import { Key } from '../../components/Key/Key';
import { types } from '../../types/types';
import { OpContext } from '../../operations/OpContext';

export const Keypad = () => {
  return (
    <div className='keypad__container'>
      <div className='keypad__row'>
        <Key value='C' type={types.keyFun} />
        <Key value='+/-' type={types.keyFun} />
        <Key value='%' type={types.keyFun} />
        <Key value='/' type={types.keyFun} />
      </div>
      <div className='keypad__row'>
        <Key value='7' type={types.keyNum} />
        <Key value='8' type={types.keyNum} />
        <Key value='9' type={types.keyNum} />
        <Key value='X' type={types.keyFun} />
      </div>
      <div className='keypad__row'>
        <Key value='4' type={types.keyNum} />
        <Key value='5' type={types.keyNum} />
        <Key value='6' type={types.keyNum} />
        <Key value='-' type={types.keyFun} />
      </div>
      <div className='keypad__row'>
        <Key value='1' type={types.keyNum} />
        <Key value='2' type={types.keyNum} />
        <Key value='3' type={types.keyNum} />
        <Key value='+' type={types.keyFun} />
      </div>
      <div className='keypad__row'>
        <Key value='0' type={types.keyNum} />
        <Key value='.' type={types.keyNum} />
        <Key value='=' type={types.keyFun} />
      </div>
    </div>
  );
};
