import React from 'react';
import { Skeleton } from 'antd';
import { v1 } from 'uuid';

import styles from './skeleton-card.module.css';

export const SkeletonCard: React.FC = () => {
  return (
    <React.Fragment key={v1()}>
      <Skeleton
        loading={true}
        active
        paragraph={{ rows: 6, width: '250px' }}
        className={styles.skeleton_card}
      />
    </React.Fragment>
  );
};
