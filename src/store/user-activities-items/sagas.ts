import { call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { PayloadAction } from '@reduxjs/toolkit';
import { getUserActivities } from 'api/activities/get-user-activities';
import { userActivitiesItemsActions } from './slice';

function* userActivitiesItemsSaga(props: PayloadAction<string>) {
  try {
    const { res } = yield call(getUserActivities, props['payload']);

    yield put(userActivitiesItemsActions.success(res));
  } catch (e) {
    yield put(userActivitiesItemsActions.failure());
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

export function* watchCreateavUserActivitiesItemsSaga() {
  yield takeLatest(
    userActivitiesItemsActions.request.type,
    userActivitiesItemsSaga
  );
}
