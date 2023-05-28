import React from 'react';
import { useLocation } from 'react-router-dom';
import { Page } from 'components/ui-components/page';
import { Space, Typography } from 'antd';
import { BackButton } from 'components/back-button';
import { useAppDispatch, useAppSelector } from 'store';
import {
  getPersonalActivitiesSelector,
  personalActivitiesActions,
  personalActivitiesIsLoadingSelector,
} from 'store/personal-activities';
import { Loading } from 'components/ui-components/loading';
import { Card } from 'components/card';
import { authUserIdSelector } from 'store/auth';

import styles from './recomended-activities.module.css';

export const RecomendedActivities: React.FC = React.memo(() => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(personalActivitiesIsLoadingSelector);
  const activities = useAppSelector(getPersonalActivitiesSelector);
  const userId = useAppSelector(authUserIdSelector);

  React.useEffect(() => {
    dispatch(
      personalActivitiesActions.request({
        id: location.search.split('=')[1],
        userId: userId as string,
      })
    );
  }, []);

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
      <Space direction='vertical' size={20}>
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
