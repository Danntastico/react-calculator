import React, { useState } from 'react';
import { ResultScreen } from './containers/ResultScreen/ResultScreen';
import './styles/styles.scss';
import { Keypad } from './containers/Keypad/Keypad';

export const CalculatorApp = () => {
  return (
    <div className='container'>
      <ResultScreen />
      <Keypad />
    </div>
  );
};
