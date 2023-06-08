import { call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { PayloadAction } from '@reduxjs/toolkit';
import { addressActions } from './slice';
import { getAddress } from 'api/adress/get-address';

function* addressSaga(props: PayloadAction<string>) {
  try {
    const { res } = yield call(getAddress, props['payload']);

    yield put(addressActions.success(res));
  } catch (e) {
    yield put(addressActions.failure());
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

export function* watchCreateAddressSaga() {
  yield takeLatest(addressActions.request.type, addressSaga);
}
