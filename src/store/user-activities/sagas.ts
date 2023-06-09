import { call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { PayloadAction } from '@reduxjs/toolkit';
import { userActivitiesActions } from './slice';
import { UserActivitiesPostType } from './types';
import { postUserActivities } from 'api/activities/post-user-activities';

function* userActivitiesSaga(props: PayloadAction<UserActivitiesPostType>) {
  try {
    const { res } = yield call(postUserActivities, props['payload']);

    yield put(userActivitiesActions.success(res));
    yield put(
      notificationsActions.notifications({
        notifications: {
          type: 'success',
          message: 'Успех!',
          description: 'Ваша активность добавлена',
        },
      })
    );
  } catch (e) {
    yield put(userActivitiesActions.failure());
    yield put(
      notificationsActions.notifications({
        notifications: {
          type: 'success',
          message: 'Успех!',
          description: 'Ваша активность добавлена',
        },
      })
    );
  }
}

export function* watchCreateUserActivitiesSaga() {
  yield takeLatest(userActivitiesActions.request.type, userActivitiesSaga);
}
