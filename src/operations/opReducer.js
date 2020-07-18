import { types } from '../types/types';
import { calcTotal } from '../utils/calcTotal';

var num = Number.concatenate;
export const opReducer = (state, action) => {
  switch (action.type) {
    case types.addDigit:
      if (state.currentValue === 0) {
        return {
          ...state,
          currentValue: action.payload,
        };
      } else {
        return {
          ...state,
          currentValue: Number(state.currentValue + '' + action.payload),
        };
      }
    case types.resetOps:
      return {
        ...state,
        currentValue: 0,
        partialResult: 0,
      };
    case types.delete:
      return {
        ...state,
        currentValue: Number(state.currentValue.toString().slice(0, -1)),
      };
    case types.floatingPt:
      return {
        ...state,
        currentValue: state.currentValue + '.',
      };
    case types.sum:
      return {
        ...state,
        currentValue: 0,
        partialResult: calcTotal(
          state.partialResult,
          action.currentValue,
          types.sum
        ),
        lastOp: types.sum,
      };
    case types.sub:
      console.log(action.payload);
      return {
        ...state,
        currentValue: 0,
        partialResult: calcTotal(
          state.partialResult,
          action.payload,
          types.sub
        ),
        lastOp: types.sub,
      };
    case types.mult:
      return {
        ...state,
        currentValue: 0,
        partialResult: calcTotal(
          state.partialResult,
          action.payload,
          types.mult
        ),
        lastOp: types.mult,
      };
    case types.total:
      return {
        ...state,
        partialResult: 0,
        currentValue: calcTotal(
          state.partialResult,
          state.currentValue,
          state.lastOp
        ),
      };
    default:
      break;
  }
};

var num = 1234;
var num2 = parseInt(num.toString().slice(0, -1));

console.log(num2);
