import React from 'react';
import { Space, Typography } from 'antd';
import { ItemsType } from 'store/user-activities/types';

import styles from './card-activities.module.css';

export const CardActivities: React.FC<ItemsType> = React.memo((props) => {
  const {
    d0LevelName,
    d2LevelName,
    date,
    online,
    timeStarted,
    status,
    groupId,
  } = props;

  return (
    <div className={styles.card_activities}>
      <Space direction='vertical' size={0}>
        <Typography.Text
          type='secondary'
          style={{ margin: 0 }}
          className={styles.card_activities__category_text}
        >
          {d0LevelName}
        </Typography.Text>
        <Typography.Text
          type='secondary'
          className={styles.card_activities__activity_text}
        >
          {d2LevelName}
        </Typography.Text>
        <Typography.Text type='secondary'>
          Время: {date} {timeStarted}
        </Typography.Text>
        <Typography.Text type='secondary'>Группа: {groupId}</Typography.Text>
        <Typography.Text type='secondary'>
          Онлайн: {online ? 'Да' : 'Нет'}
        </Typography.Text>
        <Typography.Text type='secondary'>
          Посетили активность: {status === 'visited' ? 'Да' : 'Нет'}
        </Typography.Text>
      </Space>
    </div>
  );
});
