import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterOptionsInitialStateType, FilterOptionsType } from './types';

const initialState: FilterOptionsInitialStateType = {
  district: [],
  days: [],
  online: [],
  d0LevelName: [],
  d1LevelName: [],
  d2LevelName: [],
  certificate: [],
  area: [],
  isLoading: false,
};

const NAME = 'filterOptions';

const request: CaseReducer<FilterOptionsInitialStateType> = (state) => {
  state.isLoading = true;
};

const success: CaseReducer<
  FilterOptionsInitialStateType,
  PayloadAction<FilterOptionsType>
> = (
  state,
  {
    payload: {
      district,
      days,
      online,
      d0LevelName,
      d1LevelName,
      d2LevelName,
      certificate,
      area,
    },
  }
) => {
  state.district = district['district'];
  state.days = days['days'];
  state.online = online['online'];
  state.d0LevelName = d0LevelName['d0LevelName'];
  state.d1LevelName = d1LevelName['d1LevelName'];
  state.d2LevelName = d2LevelName['d2LevelName'];
  state.certificate = certificate['certificate'];
  state.area = area['area'];

  state.isLoading = false;
};

const failure: CaseReducer<FilterOptionsInitialStateType> = (state) => {
  state.isLoading = false;
};

export const { actions: filterOptionsActions, reducer: filterOptionsReducer } =
  createSlice({
    name: NAME,
    initialState: initialState,
    reducers: {
      request,
      success,
      failure,
    },
  });
