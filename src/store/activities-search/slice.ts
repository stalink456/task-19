import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ActivitiesType,
  SearchActivitiesInitialStateType,
  SearchActivitiesWithUserIdRequestType,
} from './types';

const initialState: SearchActivitiesInitialStateType = {
  items: [],
  isLoading: false,
};

const NAME = 'searchActivities';

const request: CaseReducer<
  SearchActivitiesInitialStateType,
  PayloadAction<SearchActivitiesWithUserIdRequestType>
> = (state) => {
  state.isLoading = true;
};

const success: CaseReducer<
  SearchActivitiesInitialStateType,
  PayloadAction<ActivitiesType[]>
> = (state, { payload }) => {
  state.items = [...payload];
  state.isLoading = false;
};

const failure: CaseReducer<SearchActivitiesInitialStateType> = (state) => {
  state.isLoading = false;
};

export const {
  actions: searchActivitiesActions,
  reducer: searchActivitiesReducer,
} = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
