import Head from 'next/head';
import { useState } from 'react';
import NoSSR from 'react-no-ssr';
import { mathMultiOneDigit } from '../questions/math/multi-one-digit';
import { mathMultiOneToSix } from '../questions/math/multi-one-to-six';
import { mathSumOneDigit } from '../questions/math/sum-one-digit';
import { mathSumOneToSix } from '../questions/math/sum-one-to-six';

const allQuestions = [
  mathSumOneToSix,
  mathSumOneDigit,
  mathMultiOneToSix,
  // mathMultiOneDigit,
];
function genNextQuestion() {
  const randIndex = Math.floor(allQuestions.length * Math.random());
  const qinfo = allQuestions[randIndex];
  const question = qinfo.generate();
  return { question, component: qinfo.component };
}

export default function Test() {
  const [curQuestion, setQuestion] = useState(genNextQuestion);
  const onSuccess = () => setQuestion(genNextQuestion());
  return (
    <div>
      <Head>
        <title>Aadhu Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoSSR>
        <curQuestion.component question={curQuestion.question} onSuccess={onSuccess} />
      </NoSSR>
    </div>
  );
}
