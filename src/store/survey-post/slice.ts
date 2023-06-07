import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  PostAnswers,
  PostAnswersWithUserId,
  SurveyPostAnswerType,
} from './types';

const initialState: SurveyPostAnswerType = {
  questions: [],
  isLoading: false,
};

const NAME = 'surveyPostAnswer';

const request: CaseReducer<
  SurveyPostAnswerType,
  PayloadAction<PostAnswersWithUserId>
> = (state) => {
  state.isLoading = true;
};

const success: CaseReducer<
  SurveyPostAnswerType,
  PayloadAction<PostAnswers[]>
> = (state) => {
  state.isLoading = false;
};

const failure: CaseReducer<SurveyPostAnswerType> = (state) => {
  state.isLoading = false;
};

export const {
  actions: surveyPostAnswerActions,
  reducer: surveyPostAnswerReducer,
} = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: { request, success, failure },
});
