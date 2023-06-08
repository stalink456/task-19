import React from 'react';
import { Space, Typography } from 'antd';
import { CardActivities } from 'components/card-activities';
import { SkeletonActivitiesCard } from 'components/ui-components/skeleton-activities-card';
import { useActivitiesYours } from 'hooks/use-activities-yours';

import styles from './activities-yours.module.css';

export const ActivitiesYours: React.FC = React.memo(() => {
  const { isLoading, userActivitiesItems, activitiesLength } =
    useActivitiesYours();

  const renderCardActivities = () => {
    return userActivitiesItems.length ? (
      userActivitiesItems.map((value, index) => (
        <CardActivities key={index} {...value} />
      ))
    ) : (
      <Typography.Title type='secondary'>
        Вы не участвуете ни в каких активностях
      </Typography.Title>
    );
  };

  const renderYoursCardActivities = () => {
    return isLoading
      ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
        [...new Array(4)].map((_, index) => (
          <SkeletonActivitiesCard key={index} />
        ))
      : null;
  };

  return (
    <React.Fragment>
      <Space direction='vertical' className={styles.activities__yours} size={0}>
        <Typography.Text
          type='secondary'
          className={styles.activities__yours__text}
        >
          Мои активности
        </Typography.Text>
        <Typography.Text
          type='secondary'
          className={styles.activities__yours__text}
        >
          {activitiesLength ? `Всего записей: ${activitiesLength}` : null}
        </Typography.Text>
        <Space direction='horizontal' wrap>
          {isLoading ? renderYoursCardActivities() : renderCardActivities()}
        </Space>
      </Space>
    </React.Fragment>
  );
});
