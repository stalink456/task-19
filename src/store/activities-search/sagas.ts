import { call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { PayloadAction } from '@reduxjs/toolkit';
import { SearchActivitiesRequestType } from './types';
import { getActivitiesSearch } from 'api/activities/get-activities-search';
import { searchActivitiesActions } from './slice';

function* searchActivitiesSaga(
  props: PayloadAction<SearchActivitiesRequestType>
) {
  try {
    const { searchActivities } = yield call(
      getActivitiesSearch,
      props['payload']
    );

    yield put(searchActivitiesActions.success(searchActivities));
  } catch (e) {
    yield put(searchActivitiesActions.failure());
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

export function* watchGetsearchActivitiesSagaSaga() {
  yield takeLatest(searchActivitiesActions.request.type, searchActivitiesSaga);
}
