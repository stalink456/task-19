import { ApplicationState } from '..';

export const filterOptionsSelector = (state: ApplicationState) =>
  state.filterOptions;

export const filterOptionsDistrictSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).district;
export const filterOptionsDaysSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).days;
export const filterOptionsOnlineSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).online;
export const filterOptionsD0LevelNameSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).d0LevelName;
export const filterOptionsD1LevelNameSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).d1LevelName;
export const filterOptionsD2LevelNameSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).d2LevelName;
export const filterOptionsCertificateSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).certificate;
export const filterOptionsAreaSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).area;
export const filterOptionsIsLoadingSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).isLoading;
