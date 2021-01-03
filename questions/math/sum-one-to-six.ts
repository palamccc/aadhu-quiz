import { randomInRange } from '../rand-utils';
import { IQuestion } from '../types';
import { IMathQuestion, MathQuestion } from './math-question';

function generate() {
  const arg1 = randomInRange(0, 6);
  const arg2 = randomInRange(0, 6);
  const op = '+';
  const answer = arg1 + arg2;
  return { arg1, op, arg2, answer };
}

export const mathSumOneToSix: IQuestion<IMathQuestion> = {
  type: 'math-sum-one-to-six',
  generate,
  component: MathQuestion,
};
