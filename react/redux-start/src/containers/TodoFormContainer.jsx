import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../redux/modules/todos';

export default function TodoFormContainer() {
  const dispatch = useDispatch();

  // [dispatch] 함수가 바뀔때마다 아래 함수가 새로 바뀔
  // useCallback()를 사용함으로써 불필요하게 함수가 새로 만들어지는 걱정을 안해도됨
  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch],
  );
  return <TodoForm add={add} />;
}
