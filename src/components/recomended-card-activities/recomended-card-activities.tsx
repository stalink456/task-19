import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { RecomendedActivity } from 'store/recomended-activities/types';

import styles from './recomended-card-activities.module.css';

export const RecomendedCardActivities: React.FC<RecomendedActivity> =
  React.memo(({ activities, typeGroup }) => {
    return (
      <div className={styles.recomended_card_activities}>
        <Typography.Title level={3}>{typeGroup}</Typography.Title>
        {activities.map(({ title }, index) => (
          <div
            key={index}
            className={styles.recomended_card_activities__description}
          >
            <Typography.Text>
              <Link to='/search-activities'>{title}</Link>
            </Typography.Text>
          </div>
        ))}
      </div>
    );
  });