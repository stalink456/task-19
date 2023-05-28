import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getPersonalActivitiesType,
  PersonalActivitiesInitialState,
} from './types';
import { ActivitiesType } from 'store/activities-search/types';

const initialState: PersonalActivitiesInitialState = {
  personalActivities: [],
  isLoading: false,
};

const NAME = 'personalActivities';

const request: CaseReducer<
  PersonalActivitiesInitialState,
  PayloadAction<getPersonalActivitiesType>
> = (state) => {
  state.isLoading = true;
};

const success: CaseReducer<
  PersonalActivitiesInitialState,
  PayloadAction<ActivitiesType[]>
> = (state, { payload }) => {
  state.personalActivities = [...payload];
  state.isLoading = false;
};

const failure: CaseReducer<PersonalActivitiesInitialState> = (state) => {
  state.isLoading = false;
};

export const {
  actions: personalActivitiesActions,
  reducer: personalActivitiesReducer,
} = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
