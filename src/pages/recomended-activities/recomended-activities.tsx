import React from 'react';
import { Page } from 'components/ui-components/page';
import { Space, Typography } from 'antd';
import { BackButton } from 'components/back-button';
import { Loading } from 'components/ui-components/loading';
import { Card } from 'components/card';
import { useRecomendedActivities } from 'hooks/use-recomended-activities';

import styles from './recomended-activities.module.css';

export const RecomendedActivities: React.FC = React.memo(() => {
  const { isLoading, activities } = useRecomendedActivities();

  if (isLoading) {
    return <Loading />;
  }

  const renderCard = () => {
    return activities.length
      ? activities.map((value, index) => <Card key={index} {...value} />)
      : null;
  };

  return (
    <Page>
      <Space
        direction='vertical'
        size={10}
        className={styles.recomended_activities}
      >
        <Space direction='vertical'>
          <BackButton />
          <Typography.Title className={styles.recomended_activities__text}>
            Рекомендуемые активности
          </Typography.Title>
          <Space
            className={styles.recomended_activities__cards}
            direction='vertical'
          >
            {renderCard()}
          </Space>
        </Space>
      </Space>
    </Page>
  );
});
