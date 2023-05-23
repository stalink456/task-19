import React from 'react';
import { Button, Space, Typography } from 'antd';

import styles from './activities-yours.module.css';

export const ActivitiesYours: React.FC = React.memo(() => {
  return (
    <React.Fragment>
      <Space
        direction='vertical'
        className={styles.activities__yours}
        size={16}
      >
        <Typography.Text
          type='secondary'
          className={styles.activities__yours__text}
        >
          Календарь активностей
        </Typography.Text>

        <Space size={[8, 16]} wrap>
          {new Array(20).fill(null).map((_, index) => (
            <Button key={index}>Кнопка</Button>
          ))}
          <Button key={123}>+</Button>
        </Space>
      </Space>
    </React.Fragment>
  );
});
