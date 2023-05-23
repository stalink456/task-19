import React from 'react';
import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

import styles from './activities-recomended.module.css';

export const ActivitiesRecomended: React.FC = React.memo(() => {
  return (
    <React.Fragment>
      <Space
        direction='vertical'
        size={16}
        className={styles.activities__recomended}
      >
        <Typography.Text
          type='secondary'
          className={styles.activities__recomended__text}
        >
          Рекомендуемые направления
        </Typography.Text>
        <Link to='/search-activities'>Items</Link>
        <Link to='/search-activities'>Items</Link>
        <Link to='/search-activities'>Items</Link>
        <Link to='/search-activities'>Items</Link>
      </Space>
    </React.Fragment>
  );
});
