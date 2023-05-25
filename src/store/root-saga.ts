import { fork } from 'redux-saga/effects';
import { watchCreateAuthSaga } from './auth';

export function* rootSaga() {
  yield fork(watchCreateAuthSaga);
}
