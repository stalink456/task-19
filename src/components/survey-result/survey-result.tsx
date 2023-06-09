import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import styles from './survey-result.module.css';

export const SurveyResult: React.FC = React.memo(() => {
  return (
    <div className={styles.survey_result__container}>
      <CheckCircleOutlined className={styles.survey_result__container__icon} />
      <Typography.Title
        level={3}
        className={styles.survey_result__container__title}
      >
        Спасибо, что ответили на наши вопросы, теперь рекомендации будут более
        точными
      </Typography.Title>

      <Link
        to={
          process.env.REACT_APP_LTC
            ? process.env.REACT_APP_LTC + 'main'
            : '/main'
        }
        className={styles.survey_card__container__submit_button}
      >
        <Button style={{ height: '2.5em' }}>Перейти на главную страницу</Button>
      </Link>
    </div>
  );
});
