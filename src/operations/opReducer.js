import { types } from '../types/types';
import { calcTotal } from '../utils/calcTotal';

var num = Number.concatenate;
export const opReducer = (state, action) => {
  switch (action.type) {
    case types.addDigit:
      if (state.display === 0 || state.isFirstNumReady)
        return { ...state, display: action.payload, isFirstNumReady: false };
      else
        return {
          ...state,
          display: Number(state.display + '' + action.payload),
          isFirstNumReady: false,
        };
    case types.sum:
      if (!state.firstNum) {
        return {
          ...state,
          firstNum: state.display,
          display: 0,
          isFirstNumReady: true,
          operator: types.sum,
        };
      } else {
        return {
          ...state,
          firstNum: calcTotal(state.firstNum, state.display, types.sum),
          display: 0,
          isFirstNumReady: true,
          operator: types.sum,
        };
      }
    case types.sub:
      if (!state.firstNum) {
        return {
          ...state,
          firstNum: state.display,
          display: 0,
          isFirstNumReady: true,
          operator: types.sub,
        };
      } else {
        return {
          ...state,
          firstNum: calcTotal(state.firstNum, state.display, types.sub),
          display: 0,
          isFirstNumReady: true,
          operator: types.sub,
        };
      }
    case types.mult:
      if (!state.firstNum) {
        return {
          ...state,
          firstNum: state.display,
          display: 0,
          isFirstNumReady: true,
          operator: types.mult,
        };
      } else {
        return {
          ...state,
          firstNum: calcTotal(state.firstNum, state.display, types.mult),
          display: 0,
          isFirstNumReady: true,
          operator: types.mult,
        };
      }
    case types.div:
      if (!state.firstNum) {
        return {
          ...state,
          firstNum: state.display,
          display: 0,
          isFirstNumReady: true,
          operator: types.div,
        };
      } else {
        return {
          ...state,
          firstNum: calcTotal(state.firstNum, state.display, types.div),
          display: 0,
          isFirstNumReady: true,
          operator: types.div,
        };
      }
    case types.total:
      return {
        ...state,
        firstNum: null,
        display: calcTotal(state.firstNum, state.display, state.operator),
        operator: '=',
      };
    case types.resetOps:
      return {
        ...state,
        firstNum: null,
        display: 0,
        isFirstNumReady: false,
        operator: '',
      };
    case types.delete:
      return {
        ...state,
        display: Number(state.display.toString().slice(0, -1)),
      };
    case types.percent:
      return {
        ...state,
        display: state.display * 0.01,
      };
    default:
      break;
  }
};
