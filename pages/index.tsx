import Head from 'next/head';
import { Question } from '../components/question';

export default function Test() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Aadhu Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Question />
    </div>
  );
}
