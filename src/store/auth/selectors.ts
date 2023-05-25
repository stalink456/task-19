import { ApplicationState } from '..';

export const authSelector = (state: ApplicationState) => state.auth;

export const authUUIDSelector = (state: ApplicationState) =>
  authSelector(state).uuid;
export const authFIOSelector = (state: ApplicationState) =>
  authSelector(state).fio;
export const authDateSelector = (state: ApplicationState) =>
  authSelector(state).date;
export const authAddressSelector = (state: ApplicationState) =>
  authSelector(state).address;
export const authSexSelector = (state: ApplicationState) =>
  authSelector(state).sex;
export const authIsLoadingSelector = (state: ApplicationState) =>
  authSelector(state).isLoading;
