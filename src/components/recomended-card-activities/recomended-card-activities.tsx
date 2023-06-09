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
        {activities.map(({ title, d3LevelId }, index) => (
          <div
            key={index}
            className={styles.recomended_card_activities__description}
          >
            <Typography.Text
              className={styles.recomended_card_activities__description_text}
            >
              <Link
                to={`/ltc/recomended-activities?d3LevelId=${d3LevelId}`}
                style={{ marginBottom: '20px' }}
              >
                {title}
              </Link>
            </Typography.Text>
          </div>
        ))}
      </div>
    );
  });
