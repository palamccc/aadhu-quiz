import { useCallback, useEffect, useState } from 'react';

export interface IMathQuestion {
  arg1: number;
  op: string;
  arg2: number;
  answer: number;
}

export function MathQuestion(props: { question: IMathQuestion; onSuccess: () => void }) {
  const { arg1, op, arg2, answer: expAns } = props.question;
  const [lightColor, setLightColor] = useState('bg-gray-400');
  const [level, setLevel] = useState(1);
  const [correctCount, setCorrectCount] = useState(0);
  const [actual, setActual] = useState('');
  const requestFocus = useCallback((ele: HTMLInputElement | null) => {
    if (ele) ele.focus();
  }, []);
  const validateAnswer = () => {
    const ans = parseInt(actual || '0');
    if (ans === expAns) {
      setActual('');
      setLightColor('bg-green-400');
      if (correctCount === 2) {
        setCorrectCount(0);
        setLevel((l) => l + 1);
      } else {
        setCorrectCount((x) => x + 1);
      }
      props.onSuccess();
    } else {
      setLightColor('bg-red-400');
      setActual('');
      setCorrectCount(0);
      setLevel((l) => Math.max(l - 1, 1));
    }
    setTimeout(() => setLightColor('bg-gray-400'), 500);
  };
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-xl py-7 px-9 shadow-sm">
        <div className="text-center font-bold text-blue-500 pb-2 tracking-wider">
          LEVEL {level}
        </div>
        <div className="flex flex-row items-baseline justify-center">
          <div className="text-4xl">{arg1}</div>
          <div className="text-4xl p-2">{op}</div>
          <div className="text-4xl">{arg2}</div>
          <div className="text-4xl p-2">=</div>
          <input
            type="number"
            value={actual}
            onChange={(e) => setActual(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && validateAnswer()}
            ref={requestFocus}
            style={{
              borderBottomWidth: 4,
              borderBottomStyle: 'dashed',
            }}
            className="border-yellow-500 bg-yellow-50 block w-20 outline-none text-center text-4xl py-2 px-3 text-grey-darkest"
          />
          <div className={`mx-3 rounded-xl w-6 h-6 ${lightColor}`}></div>
        </div>
      </div>
    </div>
  );
}
