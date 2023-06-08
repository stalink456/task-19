import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { authUserIdSelector } from 'store/auth';
import {
  getPersonalActivitiesSelector,
  personalActivitiesActions,
  personalActivitiesIsLoadingSelector,
} from 'store/personal-activities';

export const useRecomendedActivities = () => {
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

  return {
    isLoading,
    activities,
  };
};
