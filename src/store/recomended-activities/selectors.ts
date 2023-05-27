import { ApplicationState } from '..';

export const recomendedActivitiesSelector = (state: ApplicationState) =>
  state.recomendedActivities;

export const recomendedActivitiesResultSelector = (state: ApplicationState) =>
  recomendedActivitiesSelector(state).recomendedActivities;
export const recomendedActivitiesIsLoadingSelector = (
  state: ApplicationState
) => recomendedActivitiesSelector(state).isLoading;
