import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import { Page } from 'components/ui-components/page';

import styles from './main.module.css';

// необходима деструктуризация, компонент перегружен
export const Main: React.FC = () => {
  return (
    <Page>
      <Space direction='horizontal' className={styles.main} wrap>
        <Space
          direction='vertical'
          className={styles.main__activities}
          size={16}
        >
          <Typography.Text type='secondary' className={styles.main__text}>
            Рекомендуемые направления
          </Typography.Text>
          <Link to='/search-activities'>Items</Link>
          <Link to='/search-activities'>Items</Link>
          <Link to='/search-activities'>Items</Link>
          <Link to='/search-activities'>Items</Link>
        </Space>

        <Space direction='vertical' className={styles.main__quiz}>
          <Typography.Text type='secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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

        <Space
          direction='vertical'
          className={styles.main__your_activities}
          size={16}
        >
          <Typography.Text type='secondary' className={styles.main__text}>
            Календарь активностей
          </Typography.Text>

          <Space size={[8, 16]} wrap>
            {new Array(20).fill(null).map((_, index) => (
              <Button key={index}>Кнопка</Button>
            ))}
            <Button key={123}>+</Button>
          </Space>
        </Space>
      </Space>
    </Page>
  );
};
