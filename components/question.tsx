import { useCallback, useEffect, useState } from 'react';

function useQuestionGenerator(): [number, number, number, () => void] {
  const [arg1, setArg1] = useState(0);
  const [arg2, setArg2] = useState(0);
  const refresh = useCallback(() => {
    const a1 = 1 + Math.floor(Math.random() * 10);
    const a2 = 1 + Math.floor(Math.random() * 10);
    setArg1(a1);
    setArg2(a2);
  }, []);
  useEffect(refresh, []);
  const expAns = arg1 * arg2;
  return [arg1, arg2, expAns, refresh];
}

export function Question() {
  const [arg1, arg2, expAns, refresh] = useQuestionGenerator();
  const [actual, setActual] = useState('');
  const requestFocus = useCallback((ele: HTMLInputElement | null) => {
    if (ele) ele.focus();
  }, []);
  const validateAnswer = () => {
    const ans = parseInt(actual || '0');
    if (ans === expAns) {
      console.log('correct');
      setActual('');
      refresh();
    } else {
      console.log('wrong');
    }
  };
  return (
    <div className="flex flex-row items-baseline justify-center">
      <div className="text-4xl">{arg1}</div>
      <div className="text-4xl p-2">x</div>
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
