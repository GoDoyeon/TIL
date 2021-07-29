import { useRef } from 'react';

// 컨테이너가 주는 데이터/함수를 받아서 보여주거나/함수를 실행하는 컴포넌트
export default function TodoForm({ add }) {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    add(inputRef.current.value);
  }
}
