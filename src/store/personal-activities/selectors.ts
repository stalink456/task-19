import { ApplicationState } from '..';

export const personalActivitiesSelector = (state: ApplicationState) =>
  state.personalActivities;

export const getPersonalActivitiesSelector = (state: ApplicationState) =>
  personalActivitiesSelector(state).personalActivities;
export const personalActivitiesIsLoadingSelector = (state: ApplicationState) =>
  personalActivitiesSelector(state).isLoading;
