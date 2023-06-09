import React from 'react';
import { Button, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

import styles from './activities-survey.module.css';

export const ActivitiesSurvey: React.FC = React.memo(() => {
  return (
    <React.Fragment>
      <Space direction='vertical' className={styles.activities__quiz}>
        <Typography.Text
          type='secondary'
          className={styles.activities__quiz__title}
        >
          Подбор активностей
        </Typography.Text>
        <Typography.Text className={styles.activities__quiz__text}>
          Пройдите опрос и узнайте, какие направления подходят именно Вам.
        </Typography.Text>
        <Link
          to={
            process.env.REACT_APP_LTC
              ? process.env.REACT_APP_LTC + 'survey'
              : '/survey'
          }
        >
          <Button type='primary' block style={{ height: '2.5em' }}>
            Пройти опрос
          </Button>
        </Link>
      </Space>
    </React.Fragment>
  );
});
