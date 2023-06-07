import React from 'react';
import { Typography } from 'antd';
import { RecomendedCardActivities } from 'components/recomended-card-activities';
import { useActivitiesRecomended } from 'hooks/use-activities-recomended';
import { SkeletonCard } from 'components/ui-components/skeleton-card';

import styles from './activities-recomended.module.css';

export const ActivitiesRecomended: React.FC = () => {
  const { recomendedActivities, isLoading } = useActivitiesRecomended();

  const renderSkeletonCard = () => {
    return isLoading
      ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
        [...new Array(3)].map((_, index) => <SkeletonCard key={index} />)
      : null;
  };

  const renderRecomendedActivities = () => {
    return !isLoading
      ? recomendedActivities.map(({ activities, typeGroup }, index) => (
          <RecomendedCardActivities
            key={index}
            activities={activities}
            typeGroup={typeGroup}
          />
        ))
      : null;
  };

  return (
    <React.Fragment>
      <div className={styles.activities__recomended}>
        <Typography.Text
          type='secondary'
          className={styles.activities__recomended__text}
        >
          Рекомендуемые направления
        </Typography.Text>

        <div className={styles.activities__recomended__container}>
          {isLoading ? renderSkeletonCard() : renderRecomendedActivities()}
        </div>
      </div>
    </React.Fragment>
  );
};
