import Head from 'next/head';

export default function Test() {
  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <Head>
        <title>Aadhu Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-4xl">5 X 3 =</div>
    </div>
  );
}
