import { call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { PayloadAction } from '@reduxjs/toolkit';
import { getPersonalActivities } from 'api/activities/get-personal-activities';
import { personalActivitiesActions } from './slice';
import { getPersonalActivitiesType } from './types';

function* personalActivitiesSaga(
  props: PayloadAction<getPersonalActivitiesType>
) {
  try {
    const { searchActivities } = yield call(
      getPersonalActivities,
      props['payload']
    );

    yield put(personalActivitiesActions.success(searchActivities));
  } catch (e) {
    yield put(personalActivitiesActions.failure());
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

export function* watchGetPersonalActivitiesSaga() {
  yield takeLatest(
    personalActivitiesActions.request.type,
    personalActivitiesSaga
  );
}
