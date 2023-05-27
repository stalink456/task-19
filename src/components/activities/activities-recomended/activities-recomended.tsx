import React from 'react';
import { Typography } from 'antd';
import { RecomendedCardActivities } from 'components/recomended-card-activities';
import { useActivitiesRecomended } from 'hooks/use-activities-recomended';

import styles from './activities-recomended.module.css';
import { Loading } from 'components/ui-components/loading';

export const ActivitiesRecomended: React.FC = () => {
  const { recomendedActivities, isLoading } = useActivitiesRecomended();

  if (isLoading) {
    return <Loading />;
  }

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
          {recomendedActivities.map(({ activities, typeGroup }, index) => (
            <RecomendedCardActivities
              key={index}
              activities={activities}
              typeGroup={typeGroup}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
