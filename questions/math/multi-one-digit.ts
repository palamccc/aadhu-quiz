import { randomInRange } from '../rand-utils';
import { IQuestion } from '../types';
import { IMathQuestion, MathQuestion } from './math-question';

function generate() {
  const arg1 = randomInRange(2, 9);
  const arg2 = randomInRange(2, 9);
  const op = 'x';
  const answer = arg1 * arg2;
  return { arg1, op, arg2, answer };
}

export const mathMultiOneDigit: IQuestion<IMathQuestion> = {
  type: 'math-multi-one-digit',
  generate,
  component: MathQuestion,
};
