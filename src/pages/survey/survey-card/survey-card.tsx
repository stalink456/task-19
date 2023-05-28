import React from 'react';
import { Button, Checkbox, Input, Radio, Space, Typography } from 'antd';
import { BackButton } from 'components/back-button';
import { useSurvey } from 'hooks/use-survey';

import styles from './survey-card.module.css';

export const SurveyCard: React.FC = () => {
  const {
    answersUser,
    surveyLength,
    currentQuestion,
    question,
    answer,
    type,

    onChangeRadioQuestion,
    onChangeCheckboxQuestion,
    onChangeInputQuestion,
    handleQuestionSurvey,
  } = useSurvey();

  const renderRadio = () => {
    return type === 'radio' ? (
      <Radio.Group onChange={onChangeRadioQuestion} name={question}>
        <Space direction='vertical'>
          {answer.map(({ value }, index) => (
            <Radio key={index} value={value}>
              {value}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    ) : null;
  };

  const renderChecbox = () => {
    return type === 'checkbox' ? (
      <Space direction='vertical'>
        <Checkbox.Group
          style={{ display: 'flex', flexDirection: 'column' }}
          options={answer.map(({ value }) => value)}
          onChange={onChangeCheckboxQuestion}
        />
      </Space>
    ) : null;
  };

  const renderInput = () => {
    return type === 'input' ? (
      <Space direction='vertical' style={{ width: '100%' }}>
        <Input
          placeholder={answer[0]['value']}
          onChange={onChangeInputQuestion}
        />
      </Space>
    ) : null;
  };

  return (
    <Space direction='vertical' className={styles.survey_card__container}>
      <BackButton />
      <Typography.Title>
        Вопрос {currentQuestion + 1} из {surveyLength}
      </Typography.Title>
      <Typography.Text>{question}</Typography.Text>
      {renderRadio()}
      {renderChecbox()}
      {renderInput()}
      <Button
        onClick={handleQuestionSurvey}
        type='primary'
        disabled={!answersUser}
        className={styles.survey_card__container__submit_button}
      >
        Следующий вопрос!
      </Button>
    </Space>
  );
};
