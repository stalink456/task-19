import { ApplicationState } from '..';

export const filterOptionsSelector = (state: ApplicationState) =>
  state.filterOptions;

export const filterOptionsDistrictSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).district;
export const filterOptionsDaysSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).days;
export const filterOptionsOnlineSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).online;
export const filterOptionsD0LevelIdSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).d0LevelId;
export const filterOptionsD1LevelIdSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).d1LevelId;
export const filterOptionsD2LevelIdSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).d2LevelId;
export const filterOptionsCertificateSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).certificate;
export const filterOptionsAreaSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).area;
export const filterOptionsIsLoadingSelector = (state: ApplicationState) =>
  filterOptionsSelector(state).isLoading;
