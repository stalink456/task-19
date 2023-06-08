import { all, fork } from 'redux-saga/effects';
import { watchCreateAuthSaga } from './auth';
import { watchGetRecomendedActivitiesSaga } from './recomended-activities';
import { watchGetFilterOptionsSaga } from './filter-options';
import { watchGetSearchActivitiesSaga } from './activities-search';
import { watchCreateavAilableDatesSaga } from './avalibale-dates';
import { watchCreateUserActivitiesSaga } from './user-activities';
import { watchCreateavUserActivitiesItemsSaga } from './user-activities-items';
import { watchCreateSurveySaga } from './survey';
import { watchGetPersonalActivitiesSaga } from './personal-activities';
import { watchCreatesurveyPostAnswerActionsSagaSaga } from './survey-post';
import { watchCreateAddressSaga } from './address';

export function* rootSaga() {
  yield all([
    fork(watchCreateAuthSaga),
    fork(watchGetRecomendedActivitiesSaga),
    fork(watchGetFilterOptionsSaga),
    fork(watchGetSearchActivitiesSaga),
    fork(watchCreateavAilableDatesSaga),
    fork(watchCreateUserActivitiesSaga),
    fork(watchCreateavUserActivitiesItemsSaga),
    fork(watchCreateSurveySaga),
    fork(watchGetPersonalActivitiesSaga),
    fork(watchCreatesurveyPostAnswerActionsSagaSaga),
    fork(watchCreateAddressSaga),
  ]);
}
