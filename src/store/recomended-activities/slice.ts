import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  RecomendedActivitiesInitialStateType,
  RecomendedActivity,
} from './types';

const initialState: RecomendedActivitiesInitialStateType = {
  recomendedActivities: [],
  isLoading: false,
};

const NAME = 'recomendedActivities';

const request: CaseReducer<
  RecomendedActivitiesInitialStateType,
  PayloadAction<string>
> = (state) => {
  state.isLoading = true;
};

const success: CaseReducer<
  RecomendedActivitiesInitialStateType,
  PayloadAction<RecomendedActivity[]>
> = (state, { payload }) => {
  state.recomendedActivities = [...payload];
  state.isLoading = false;
};

const failure: CaseReducer<RecomendedActivitiesInitialStateType> = (state) => {
  state.isLoading = false;
};

export const {
  actions: recomendedActivitiesActions,
  reducer: recomendedActivitiesReducer,
} = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
