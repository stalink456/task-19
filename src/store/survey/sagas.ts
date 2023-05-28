import { call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { getSurvey } from 'api/survey/get-survey';
import { surveyActions } from './slice';

function* surveySaga() {
  try {
    const { survey } = yield call(getSurvey);

    yield put(surveyActions.successRequestSurvey(survey));
  } catch (e) {
    yield put(surveyActions.failureRequestSurvey());
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

export function* watchCreateSurveySaga() {
  yield takeLatest(surveyActions.requestSurvey.type, surveySaga);
}
