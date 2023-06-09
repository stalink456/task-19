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
import { authUserIdSelector } from 'store/auth';
import { surveyPostAnswerActions } from 'store/survey-post';
import { addressActions, addressItemsSelector } from 'store/address';
import debounce from 'lodash.debounce';

export const useSurveyCard = () => {
  const dispatch = useAppDispatch();
  const [answersUser, setAnswersUser] = React.useState<AnswersType>(null);
  const surveyLength = useAppSelector(surveyLengthSelector);
  const currentQuestion = useAppSelector(surveyCurrentQuestionSelector);
  const survey = useAppSelector(surveyItemsSelector);
  const surveyUserAnswers = useAppSelector(surveyUserAnswersSelector);
  const address = useAppSelector(addressItemsSelector);
  const { question, answer, id, type } = survey[currentQuestion];
  const userId = useAppSelector(authUserIdSelector);

  const onChangeRadioQuestion = (event: RadioChangeEvent) => {
    setAnswersUser(
      (prev) =>
        ({
          ...prev,
          questionKey: id,
          answer: event.target.value,
        } as AnswersType)
    );
  };

  const onChangeCheckboxQuestion = (value: CheckboxValueType[]) => {
    setAnswersUser(
      (prev) => ({ ...prev, questionKey: id, answer: value } as AnswersType)
    );
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(addressActions.request(str));
    }, 250),
    []
  );

  const onChangeInputQuestion = (data: string) => {
    setAnswersUser(
      (prev) =>
        ({
          ...prev,
          questionKey: id,
          answer: data,
        } as AnswersType)
    );
    updateSearchValue(data);
  };

  const onSelectAddress = (data: string) => {
    setAnswersUser(
      (prev) =>
        ({
          ...prev,
          questionKey: id,
          answer: data,
        } as AnswersType)
    );
  };

  const handleQuestionSurvey = () => {
    if (currentQuestion + 1 === surveyLength) {
      dispatch(
        surveyPostAnswerActions.request({
          surveyUserAnswers: [...surveyUserAnswers, answersUser],
          userId: userId ? userId : '',
        })
      );
      dispatch(surveyActions.addItems(answersUser));
    } else {
      dispatch(surveyActions.addItems(answersUser));
    }

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
    address, // доделать debounce

    onChangeRadioQuestion,
    onChangeCheckboxQuestion,
    onChangeInputQuestion,
    handleQuestionSurvey,
    onSelectAddress,
  };
};
