import { ApplicationState } from '..';

export const userActivitiesSelector = (state: ApplicationState) =>
  state.userActivities;

export const userActivitiesItemsSelector = (state: ApplicationState) =>
  userActivitiesSelector(state).items;
export const userActivitiesListSelector = (state: ApplicationState) =>
  userActivitiesSelector(state).userActivities;
export const userActivitiesIsLoadingSelector = (state: ApplicationState) =>
  userActivitiesSelector(state).isLoading;
