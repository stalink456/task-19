import React from 'react';
import { Space } from 'antd';
import { Page } from 'components/ui-components/page';
import { ActivitiesRecomended } from 'components/activities/activities-recomended';
import { ActivitiesYours } from 'components/activities/activities-yours';
import { ActivitiesSurvey } from 'components/activities/activities-survey';

import styles from './main.module.css';
import { SearchActivitiesDescription } from 'components/search-activities-description';

export const Main: React.FC = () => {
  return (
    <Page>
      <Space direction='vertical' className={styles.main}>
        <ActivitiesRecomended />
        <Space direction='horizontal' className={styles.main__activities}>
          <ActivitiesSurvey />
          <SearchActivitiesDescription />
        </Space>
        <ActivitiesYours />
      </Space>
    </Page>
  );
};
