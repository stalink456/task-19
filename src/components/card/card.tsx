import React from 'react';
import { Button, Space, Typography } from 'antd';
import { ActivitiesType } from 'store/activities-search/types';

import styles from './card.module.css';

export const Card: React.FC<ActivitiesType> = (props) => {
  const {
    address,
    area,
    d1LevelName,
    d2LevelName,
    district,
    groupId,
    scheduleClosed,
  } = props;

  return (
    <div className={styles.card}>
      <Space direction='vertical' size={8}>
        <Space direction='vertical' size={0}>
          <Typography.Title
            type='secondary'
            level={5}
            style={{ margin: 0 }}
            className={styles.card__category_text}
          >
            {d1LevelName}
          </Typography.Title>
          <Typography.Text
            type='secondary'
            className={styles.card__activity_text}
          >
            {d2LevelName}
          </Typography.Text>
          <Typography.Text type='secondary'>
            Адрес: {address}, {area}, {district}
          </Typography.Text>
          <Typography.Text type='secondary'>Группа: {groupId}</Typography.Text>
          <Typography.Text type='secondary'>
            Время работы: {scheduleClosed}
          </Typography.Text>
        </Space>
        <Button type='primary'>Записаться!</Button>
      </Space>
    </div>
  );
};
