export type AnswerType = {
  value: string;
};

export type AnswersType = {
  questionUser: string;
  answerUser: string | string[];
} | null;

export type SurveyType = {
  question: string;
  answer: AnswerType[];
  type: 'checkbox' | 'radio' | 'input';
};

export type SurveyInitialStateType = {
  survey: SurveyType[];
  currentQuestion: number;
  questionLength: number;
  isLoading: boolean;
  userAnswers: AnswersType[];
};
