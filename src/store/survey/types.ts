export type AnswerType = {
  id: string;
  value: string;
};

export type AnswersType = {
  questionKey: string;
  answer: string | string[];
} | null;

export type SurveyType = {
  question: string;
  answer: AnswerType[];
  id: string;
  type: 'checkbox' | 'radio' | 'input';
};

export type SurveyInitialStateType = {
  survey: SurveyType[];
  currentQuestion: number;
  questionLength: number;
  isLoading: boolean;
  userAnswers: AnswersType[];
};
