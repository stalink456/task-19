import React from 'react';
import { Button, Radio, Space, Typography } from 'antd';
import { BackButton } from 'components/back-button';
import { useQuiz } from 'hooks/use-quiz';

import styles from './quiz.module.css';

export const Quiz: React.FC = () => {
  const { value, onChange, handleQuestionQuize } = useQuiz();

  return (
    <div className={styles.quiz}>
      <Space direction='vertical' className={styles.quiz__container}>
        <BackButton />
        <Typography.Title>Вопрос 1 из infinity</Typography.Title>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction='vertical'>
            <Radio value={1}>Option A</Radio>
            <Radio value={2}>Option B</Radio>
            <Radio value={3}>Option C</Radio>
          </Space>
        </Radio.Group>
        <Button
          onClick={handleQuestionQuize}
          type='primary'
          disabled={!value}
          className={styles.quiz__container__submit_button}
        >
          Наводчик контужен!
        </Button>
      </Space>
    </div>
  );
};
