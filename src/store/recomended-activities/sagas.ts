import { call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { PayloadAction } from '@reduxjs/toolkit';
import { getRecomendedActivities } from 'api/activities/get-recomended-activities';
import { recomendedActivitiesActions } from './slice';

function* recomendedActivitiesSaga(props: PayloadAction<string>) {
  try {
    const { recomendedActivities } = yield call(
      getRecomendedActivities,
      props['payload']
    );

    yield put(recomendedActivitiesActions.success(recomendedActivities));
  } catch (e) {
    yield put(recomendedActivitiesActions.failure());
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

export function* watchGetRecomendedActivitiesSaga() {
  yield takeLatest(
    recomendedActivitiesActions.request.type,
    recomendedActivitiesSaga
  );
}
