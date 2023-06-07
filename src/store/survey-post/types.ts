import { AnswersType } from 'store/survey/types';

export type PostAnswers = {
  questionUser: string;
  answerUser: string | string[];
};

export type SurveyPostAnswerType = {
  questions: AnswersType[];
  isLoading: boolean;
};

export type PostAnswersWithUserId = {
  surveyUserAnswers: AnswersType[];
  userId: string;
};
