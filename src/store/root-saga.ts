import { all, fork } from 'redux-saga/effects';
import { watchCreateAuthSaga } from './auth';
import { watchGetRecomendedActivitiesSaga } from './recomended-activities';
import { watchGetFilterOptionsSaga } from './filter-options';
import { watchGetsearchActivitiesSagaSaga } from './activities-search';

export function* rootSaga() {
  yield all([
    fork(watchCreateAuthSaga),
    fork(watchGetRecomendedActivitiesSaga),
    fork(watchGetFilterOptionsSaga),
    fork(watchGetsearchActivitiesSagaSaga),
  ]);
}
