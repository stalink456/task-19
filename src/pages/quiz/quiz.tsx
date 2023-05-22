import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Radio, Space, Typography } from 'antd';
import { useQuiz } from 'hooks/use-quiz';

import style from './quiz.module.css';

export const Quiz: React.FC = () => {
  const { value, onChange, handleQuestionQuize } = useQuiz();

  return (
    <div className={style.quiz}>
      <Link to='/main'>
        <Button>Назад</Button>
      </Link>
      <Space direction='vertical' className={style.quiz__container}>
        <Typography.Title>Вопрос 1 из infinity</Typography.Title>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction='vertical'>
            <Radio value={1}>Option A</Radio>
            <Radio value={2}>Option B</Radio>
            <Radio value={3}>Option C</Radio>
          </Space>
        </Radio.Group>
        <Button onClick={handleQuestionQuize} type='primary' disabled={!value}>
          Наводчик контужен!
        </Button>
      </Space>
    </div>
  );
};
