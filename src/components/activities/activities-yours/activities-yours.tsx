import React from 'react';
import { Space, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from 'store';
import {
  userActivitiesItemsActions,
  userActivitiesItemsIsLoadingSelector,
  userActivitiesItemsListLengthSelector,
  userActivitiesItemsListSelector,
} from 'store/user-activities-items';
import { authUserIdSelector } from 'store/auth';
import { Loading } from 'components/ui-components/loading';
import { CardActivities } from 'components/card-activities';

import styles from './activities-yours.module.css';

export const ActivitiesYours: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(userActivitiesItemsIsLoadingSelector);
  const userActivitiesItems = useAppSelector(userActivitiesItemsListSelector);
  const userId = useAppSelector(authUserIdSelector);
  const activitiesLength = useAppSelector(
    userActivitiesItemsListLengthSelector
  );

  React.useEffect(() => {
    dispatch(userActivitiesItemsActions.request(userId as string));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const renderCardActivities = () => {
    return userActivitiesItems.length ? (
      userActivitiesItems.map((value, index) => (
        <CardActivities key={index} {...value} />
      ))
    ) : (
      <Typography.Title type='secondary'>Ничего не найдено :(</Typography.Title>
    );
  };

  return (
    <React.Fragment>
      <Space
        direction='vertical'
        className={styles.activities__yours}
        size={16}
      >
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
          {renderCardActivities()}
        </Space>
      </Space>
    </React.Fragment>
  );
});
