import { Button, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './activities-quiz.module.css';

export const ActivitiesQuiz: React.FC = React.memo(() => {
  return (
    <React.Fragment>
      <Space direction='vertical' className={styles.activities__quiz}>
        <Typography.Text type='secondary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography.Text>
        <Link to='/quiz'>
          <Button type='primary' block>
            Пройти опрос
          </Button>
        </Link>
      </Space>
    </React.Fragment>
  );
});
