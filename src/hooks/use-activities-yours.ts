import React from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { authUserIdSelector } from 'store/auth';
import {
  userActivitiesItemsActions,
  userActivitiesItemsIsLoadingSelector,
  userActivitiesItemsListLengthSelector,
  userActivitiesItemsListSelector,
} from 'store/user-activities-items';

export const useActivitiesYours = () => {
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

  return {
    isLoading,
    userActivitiesItems,
    activitiesLength,
  };
};
