import { call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { surveyPostAnswerActions } from './slice';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { PostAnswersWithUserId } from './types';
import { postSurvey } from 'api/survey/post-survey';

function* surveyPostAnswerActionsSaga(
  props: PayloadAction<PostAnswersWithUserId>
) {
  try {
    const { survey } = yield call(postSurvey, props['payload']);

    yield put(surveyPostAnswerActions.success(survey));
    yield put(
      notificationsActions.notifications({
        notifications: {
          type: 'success',
          message: 'Успех!',
          description: 'Ответы отправлены',
        },
      })
    );
  } catch (e) {
    yield put(surveyPostAnswerActions.failure());
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

export function* watchCreatesurveyPostAnswerActionsSagaSaga() {
  yield takeLatest(
    surveyPostAnswerActions.request.type,
    surveyPostAnswerActionsSaga
  );
}
