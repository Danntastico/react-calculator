import { types } from '../types/types';

const initialState = {
  currentValue: '0',
};

export const opReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addDigit:
      if (state.currentValue === '0') {
        return {
          ...state,
          currentValue: action.payload.val,
        };
      } else {
        return {
          ...state,
          currentValue: state.currentValue + action.payload.val,
        };
      }
    case types.resetOps:
      return {
        ...state,
        currentValue: '0',
      };
    default:
      break;
  }
};
