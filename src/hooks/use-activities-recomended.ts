import React from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { authUserIdSelector } from 'store/auth';
import {
  recomendedActivitiesActions,
  recomendedActivitiesIsLoadingSelector,
  recomendedActivitiesResultSelector,
} from 'store/recomended-activities';

export const useActivitiesRecomended = () => {
  const dispatch = useAppDispatch();
  const recomendedActivities = useAppSelector(
    recomendedActivitiesResultSelector
  );
  const userId = useAppSelector(authUserIdSelector);
  const isLoading = useAppSelector(recomendedActivitiesIsLoadingSelector);

  React.useEffect(() => {
    dispatch(recomendedActivitiesActions.request(userId as string));
  }, []);

  return {
    recomendedActivities,
    isLoading,
  };
};
