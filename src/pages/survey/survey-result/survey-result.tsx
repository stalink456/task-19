import React from 'react';
import { Button, Space, Typography } from 'antd';

import styles from './survey-result.module.css';
import { Link } from 'react-router-dom';

export const SurveyResult: React.FC = () => {
  return (
    <Space direction='vertical' className={styles.survey_result__container}>
      <Typography.Title
        level={3}
        className={styles.survey_result__container__title}
      >
        Спасибо, что ответили на наши вопросы, теперь рекомендации будут более
        точными
      </Typography.Title>

      <Link to='/main'>
        <Button>Перейти на главную страницу</Button>
      </Link>
    </Space>
  );
};
