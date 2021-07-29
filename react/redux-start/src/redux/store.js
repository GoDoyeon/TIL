import { applyMiddleware, createStore } from 'redux';
import todoApp from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import history from '../history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './modules/rootSaga';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  todoApp,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ history }),
      promise,
      routerMiddleware(history),
      sagaMiddleWare,
    ),
  ),
);
sagaMiddleWare.run(rootSaga);

export default store;
