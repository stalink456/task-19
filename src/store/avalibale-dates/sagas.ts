import { call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { PayloadAction } from '@reduxjs/toolkit';
import { availableDatesRequestData } from './type';
import { getAvailableDates } from 'api/available-dates/get-available-dates';
import { availableDatesActions } from './slice';

function* availableDatesSaga(props: PayloadAction<availableDatesRequestData>) {
  try {
    const { res } = yield call(getAvailableDates, props['payload']);

    yield put(availableDatesActions.success(res));
  } catch (e) {
    yield put(availableDatesActions.failure());
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

export function* watchCreateavAilableDatesSaga() {
  yield takeLatest(availableDatesActions.request.type, availableDatesSaga);
}
