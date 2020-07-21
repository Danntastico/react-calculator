import React, { useReducer } from 'react';
import { OpContext } from './operations/OpContext';
import { CalculatorApp } from './CalculatorApp';
import { opReducer } from './operations/opReducer';

const init = () => {
  return {
    display: 0,
    firstNum: null,
    operator: '',
    isFirstNumReady: false,
  };
};

export const App = () => {
  const [state, dispatch] = useReducer(opReducer, {}, init);

  return (
    <OpContext.Provider value={{ state, dispatch }}>
      <CalculatorApp />
    </OpContext.Provider>
  );
};
