import { all } from '@redux-saga/core/effects';
import { usersSaga } from './users';

export default function* rootSag() {
  yield all([usersSaga]);
}
