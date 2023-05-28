import { ApplicationState } from '..';

export const availableDatesSelector = (state: ApplicationState) =>
  state.availableDates;

export const availableDatesItemsSelector = (state: ApplicationState) =>
  availableDatesSelector(state).availableDates;
export const availableDatesIsLoadingSelector = (state: ApplicationState) =>
  availableDatesSelector(state).isLoading;
