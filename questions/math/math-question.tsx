import { useCallback, useState } from 'react';

export interface IMathQuestion {
  arg1: number;
  op: string;
  arg2: number;
  answer: number;
}

export function MathQuestion(props: { question: IMathQuestion; onSuccess: () => void }) {
  const { arg1, op, arg2, answer: expAns } = props.question;
  const [actual, setActual] = useState('');
  const requestFocus = useCallback((ele: HTMLInputElement | null) => {
    if (ele) ele.focus();
  }, []);
  const validateAnswer = () => {
    const ans = parseInt(actual || '0');
    if (ans === expAns) {
      setActual('');
      props.onSuccess();
    } else {
      setActual('');
    }
  };
  return (
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
    </div>
  );
}
