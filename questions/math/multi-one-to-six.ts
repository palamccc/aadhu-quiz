import { randomInRange } from '../rand-utils';
import { IQuestion } from '../types';
import { IMathQuestion, MathQuestion } from './math-question';

function generate() {
  const arg1 = randomInRange(1, 6);
  const arg2 = randomInRange(1, 6);
  const op = 'x';
  const answer = arg1 * arg2;
  return { arg1, op, arg2, answer };
}

export const mathMultiOneToSix: IQuestion<IMathQuestion> = {
  type: 'math-multi-one-to-six',
  generate,
  component: MathQuestion,
};
