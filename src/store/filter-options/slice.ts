import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterOptionsInitialStateType, FilterOptionsType } from './types';

const initialState: FilterOptionsInitialStateType = {
  district: [],
  days: [],
  online: [],
  d0LevelId: [],
  d1LevelId: [],
  d2LevelId: [],
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
      d0LevelId,
      d1LevelId,
      d2LevelId,
      certificate,
      area,
    },
  }
) => {
  state.district = district['district'];
  state.days = days['days'];
  state.online = online['online'];
  state.d0LevelId = d0LevelId['d0LevelId'];
  state.d1LevelId = d1LevelId['d1LevelId'];
  state.d2LevelId = d2LevelId['d2LevelId'];
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
