import { call, put, takeLatest } from 'redux-saga/effects';
import { authActions } from './slice';
import { notificationsActions } from '../notifications';
import { PayloadAction } from '@reduxjs/toolkit';
import { UserData } from './types';
import { postUser } from 'api/auth/post-user';

function* authSaga(props: PayloadAction<UserData>) {
  try {
    const { res } = yield call(postUser, props['payload']);

    yield put(authActions.success(res as string));
    yield put(
      notificationsActions.notifications({
        notifications: {
          type: 'success',
          message: `Добро пожаловать!`,
          description: `${props.payload.fio}`,
        },
      })
    );
  } catch (e) {
    yield put(authActions.failure());
    yield put(
      notificationsActions.notifications({
        notifications: {
          type: 'error',
          message: 'Ошибка!',
          description: 'Что-то пошло не так',
        },
      })
    );
  }
}

export function* watchCreateAuthSaga() {
  yield takeLatest(authActions.request.type, authSaga);
}
