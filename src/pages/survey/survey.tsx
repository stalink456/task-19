import React from 'react';
import styles from './survey.module.css';
import { useAppDispatch, useAppSelector } from 'store';
import {
  surveyActions,
  surveyCurrentQuestionSelector,
  surveyIsLoadingSelector,
  surveyLengthSelector,
} from 'store/survey';
import { SurveyResult } from '../../components/survey-result';
import { SurveyCard } from 'components/survey-card';
import { Loading } from 'components/ui-components/loading';

export const Survey: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(surveyIsLoadingSelector);
  const surveyLength = useAppSelector(surveyLengthSelector);
  const currentQuestion = useAppSelector(surveyCurrentQuestionSelector);

  React.useEffect(() => {
    dispatch(surveyActions.requestSurvey());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const renderSurveyCard = () => {
    return currentQuestion !== surveyLength ? <SurveyCard /> : null;
  };

  const renderSurveyResult = () => {
    return currentQuestion === surveyLength && surveyLength > 0 ? (
      <SurveyResult />
    ) : null;
  };

  return (
    <div className={styles.survey}>
      {renderSurveyCard()}
      {renderSurveyResult()}
    </div>
  );
};
