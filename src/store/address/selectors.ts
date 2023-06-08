import { ApplicationState } from '..';

export const addressSelector = (state: ApplicationState) => state.address;

export const addressItemsSelector = (state: ApplicationState) =>
  addressSelector(state).address;
