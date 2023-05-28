import { ApplicationState } from '..';

export const surveySelector = (state: ApplicationState) => state.survey;

export const surveyItemsSelector = (state: ApplicationState) =>
  surveySelector(state).survey;
export const surveyCurrentQuestionSelector = (state: ApplicationState) =>
  surveySelector(state).currentQuestion;
export const surveyLengthSelector = (state: ApplicationState) =>
  surveySelector(state).questionLength;
export const surveyUserAnswersSelector = (state: ApplicationState) =>
  surveySelector(state).userAnswers;
export const surveyIsLoadingSelector = (state: ApplicationState) =>
  surveySelector(state).isLoading;
