import React from 'react';
import { AutoComplete, Button, Checkbox, Radio, Space, Typography } from 'antd';
import { BackButton } from 'components/back-button';
import { useSurveyCard } from 'hooks/use-survey-card';

import styles from './survey-card.module.css';

export const SurveyCard: React.FC = () => {
  const {
    answersUser,
    surveyLength,
    currentQuestion,
    question,
    answer,
    type,
    address,

    onChangeRadioQuestion,
    onChangeCheckboxQuestion,
    onChangeInputQuestion,
    handleQuestionSurvey,
    onSelectAddress,
  } = useSurveyCard();

  const renderRadio = () => {
    return type === 'radio' ? (
      <Radio.Group onChange={onChangeRadioQuestion} name={question}>
        <Space direction='vertical'>
          {answer.map(({ value, id }, index) => (
            <Radio key={index} value={id}>
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
        <AutoComplete
          style={{ width: '23em' }}
          options={address}
          placeholder={answer[0]['value']}
          onChange={onChangeInputQuestion}
          onSelect={onSelectAddress}
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
        style={{ height: '2.5em' }}
      >
        Следующий вопрос!
      </Button>
    </Space>
  );
};
