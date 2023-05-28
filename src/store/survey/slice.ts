import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AnswersType, SurveyInitialStateType, SurveyType } from './types';

const initialState: SurveyInitialStateType = {
  survey: [],
  currentQuestion: 0,
  questionLength: 0,
  userAnswers: [],
  isLoading: false,
};

const NAME = 'survey';

const requestSurvey: CaseReducer<SurveyInitialStateType> = (state) => {
  state.isLoading = true;
};

const successRequestSurvey: CaseReducer<
  SurveyInitialStateType,
  PayloadAction<SurveyType[]>
> = (state, { payload }) => {
  state.survey = [...payload];
  state.questionLength = state.survey.length;
  state.isLoading = false;
};

const failureRequestSurvey: CaseReducer<SurveyInitialStateType> = (state) => {
  state.isLoading = false;
};

const addItems: CaseReducer<
  SurveyInitialStateType,
  PayloadAction<AnswersType>
> = (state, { payload }) => {
  state.userAnswers.push(payload);
  state.currentQuestion = state.currentQuestion + 1;
};

export const { actions: surveyActions, reducer: surveyReducer } = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    addItems,
    requestSurvey,
    successRequestSurvey,
    failureRequestSurvey,
  },
});
