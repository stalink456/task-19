import { ApplicationState } from '..';

export const searchActivitiesSelector = (state: ApplicationState) =>
  state.searchActivities;

export const searchActivitiesItemsSelector = (state: ApplicationState) =>
  searchActivitiesSelector(state).items;
export const searchActivitiesIsLoadingSelector = (state: ApplicationState) =>
  searchActivitiesSelector(state).isLoading;
