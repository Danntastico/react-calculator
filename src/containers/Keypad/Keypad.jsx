import React from 'react';
import { KeyFunc } from '../../components/Key/KeyFunc';
import { types } from '../../types/types';
import { KeyNum } from '../../components/Key/KeyNum';

export const Keypad = () => {
  return (
    <div className='keypad__container'>
      <div className='keypad__row'>
        <KeyFunc value='C' type={types.keyFun} />
        <KeyFunc value='del' type={types.keyFun} />
        <KeyFunc value='%' type={types.keyFun} />
        <KeyFunc value='/' type={types.keyFun} />
      </div>
      <div className='keypad__row'>
        <KeyNum value={7} />
        <KeyNum value={8} />
        <KeyNum value={9} />
        <KeyFunc value='X' type={types.keyFun} />
      </div>
      <div className='keypad__row'>
        <KeyNum value={4} />
        <KeyNum value={5} />
        <KeyNum value={6} />
        <KeyFunc value='-' type={types.keyFun} />
      </div>
      <div className='keypad__row'>
        <KeyNum value={1} />
        <KeyNum value={2} />
        <KeyNum value={3} />
        <KeyFunc value='+' type={types.keyFun} />
      </div>
      <div className='keypad__row'>
        <KeyNum value={0} />
        <KeyFunc value='.' />
        <KeyFunc value='=' type={types.keyFun} />
      </div>
    </div>
  );
};
