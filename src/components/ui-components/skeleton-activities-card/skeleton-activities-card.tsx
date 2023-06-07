import React from 'react';
import { v1 } from 'uuid';
import { Skeleton } from 'antd';

import styles from './skeleton-activities-card.module.css';

export const SkeletonActivitiesCard: React.FC = () => {
  return (
    <React.Fragment key={v1()}>
      <Skeleton
        loading={true}
        active
        paragraph={{ rows: 4, width: '190px' }}
        className={styles.skeleton_card_activities}
      />
    </React.Fragment>
  );
};
