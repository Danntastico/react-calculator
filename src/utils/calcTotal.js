import { types } from '../types/types';

export const calcTotal = (a = 0, b = 0, op) => {
  switch (op) {
    case types.sum:
      return sum(a, b);
    case types.sub:
      console.log('sub');
      return sub(a, b);
    case types.mult:
      return mult(a, b);
    case types.div:
      return div(a, b);
    default:
      return b;
  }
};

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;
