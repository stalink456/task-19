import React from 'react';
import { RadioChangeEvent } from 'antd';
import { useAppDispatch, useAppSelector } from 'store';
import { AnswersType } from 'store/survey/types';
import {
  surveyActions,
  surveyCurrentQuestionSelector,
  surveyItemsSelector,
  surveyLengthSelector,
  surveyUserAnswersSelector,
} from 'store/survey';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

export const useSurvey = () => {
  const dispatch = useAppDispatch();
  const [answersUser, setAnswersUser] = React.useState<AnswersType>(null);
  const surveyLength = useAppSelector(surveyLengthSelector);
  const currentQuestion = useAppSelector(surveyCurrentQuestionSelector);
  const survey = useAppSelector(surveyItemsSelector);
  const surveyUserAnswers = useAppSelector(surveyUserAnswersSelector);
  const { question, answer, type } = survey[currentQuestion];

  const onChangeRadioQuestion = (event: RadioChangeEvent) => {
    setAnswersUser(
      (prev) =>
        ({
          ...prev,
          questionUser: event.target.name,
          answerUser: event.target.value,
        } as AnswersType)
    );
  };

  const onChangeCheckboxQuestion = (value: CheckboxValueType[]) => {
    setAnswersUser(
      (prev) =>
        ({ ...prev, questionUser: question, answerUser: value } as AnswersType)
    );
  };

  const onChangeInputQuestion = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnswersUser(
      (prev) =>
        ({
          ...prev,
          questionUser: question,
          answerUser: event.target.value,
        } as AnswersType)
    );
  };

  const handleQuestionSurvey = () => {
    dispatch(surveyActions.addItems(answersUser));
    setAnswersUser(null);
  };
  return {
    answersUser,
    surveyLength,
    survey,
    surveyUserAnswers,
    answer,
    type,
    question,
    currentQuestion,

    onChangeRadioQuestion,
    onChangeCheckboxQuestion,
    onChangeInputQuestion,
    handleQuestionSurvey,
  };
};
