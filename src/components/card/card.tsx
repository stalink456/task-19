import React from 'react';
import { Button, Space, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import styles from './card.module.css';

export const Card: React.FC = React.memo(() => {
  const [array, setArray] = React.useState<string[]>(
    new Array(20).fill('Фильтр')
  );

  const handleFilter = () => {
    setArray((previousArr) => previousArr.slice(0, -1));
  };

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
            КАТЕГОРИЯ
          </Typography.Title>
          <Typography.Text
            type='secondary'
            className={styles.card__activity_text}
          >
            Активность
          </Typography.Text>
        </Space>
        <Space direction='horizontal' size={5} wrap>
          {array.map((value, index) => (
            <Button
              key={index}
              type='default'
              icon={<CloseOutlined />}
              onClick={handleFilter}
            >
              {`${value} ${index}`}
            </Button>
          ))}
        </Space>
        <Typography.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography.Text>
        <Button type='primary'>Записаться!</Button>
      </Space>
    </div>
  );
});
