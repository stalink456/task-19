import React from 'react';
import { Space, Typography, Input } from 'antd';
import { Page } from 'components/ui-components/page';
import { useSearchActivities } from 'hooks/use-search-activities';
import { BackButton } from 'components/back-button';
import { Card } from 'components/card';

import styles from './search-activities.module.css';

export const SearchActivities: React.FC = () => {
  const { inputValue, handlerOnChange, onSearch } = useSearchActivities();

  return (
    <Page>
      <Space
        direction='vertical'
        size={16}
        className={styles.search_activities}
      >
        <BackButton />
        <Typography.Text
          type='secondary'
          className={styles.search_activities__text}
        >
          Поиск активностей
        </Typography.Text>

        <Input.Search
          placeholder='Поиск активностей'
          enterButton='Поиск'
          size='large'
          value={inputValue}
          onChange={handlerOnChange}
          onSearch={onSearch}
          className={styles.search_activities__search_button}
        />

        <Space direction='vertical'>
          <Card />
          <Card />
          <Card />
        </Space>
      </Space>
    </Page>
  );
};
