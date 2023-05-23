import React from 'react';
import { Space } from 'antd';
import { Page } from 'components/ui-components/page';
import { ActivitiesRecomended } from 'components/activities/activities-recomended';
import { ActivitiesYours } from 'components/activities/activities-yours';
import { ActivitiesQuiz } from 'components/activities/activities-quiz';

import styles from './main.module.css';

export const Main: React.FC = () => {
  return (
    <Page>
      <Space direction='horizontal' className={styles.main} wrap>
        <ActivitiesRecomended />
        <ActivitiesQuiz />
        <ActivitiesYours />
      </Space>
    </Page>
  );
};
