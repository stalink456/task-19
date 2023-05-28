import { ApplicationState } from '..';

export const userActivitiesItemsSelector = (state: ApplicationState) =>
  state.userActivitiesItems;

export const userActivitiesItemsListSelector = (state: ApplicationState) =>
  userActivitiesItemsSelector(state).userActivities;
export const userActivitiesItemsListLengthSelector = (
  state: ApplicationState
) => userActivitiesItemsSelector(state).userActivitiesLength;
export const userActivitiesItemsIsLoadingSelector = (state: ApplicationState) =>
  userActivitiesItemsSelector(state).isLoading;
