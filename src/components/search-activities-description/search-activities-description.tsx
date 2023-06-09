import { Button, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './search-activities-description.module.css';

export const SearchActivitiesDescription: React.FC = React.memo(() => {
  return (
    <React.Fragment>
      <Space direction='vertical' className={styles.activities__description}>
        <Typography.Text
          type='secondary'
          className={styles.activities__description__title}
        >
          Поиск активностей
        </Typography.Text>
        <Typography.Text className={styles.activities__description__text}>
          Пройдите опрос и узнайте, какие направления подходят именно Вам.
        </Typography.Text>
        <Link
          to={
            process.env.REACT_APP_LTC
              ? process.env.REACT_APP_LTC + `/search-activities`
              : `/search-activities`
          }
        >
          <Button type='primary' block style={{ height: '2.5em' }}>
            Выбрать занятие
          </Button>
        </Link>
      </Space>
    </React.Fragment>
  );
});
