import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo } from './redux/actions';
import { completeTodo } from './redux/actions';
import { showComplete } from './redux/actions';

// store의 상태가 변경되면 이 함수가 호출됨
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo('할일'));
store.dispatch(completeTodo(0));
store.dispatch(showComplete());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
