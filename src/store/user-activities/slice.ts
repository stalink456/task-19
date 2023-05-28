import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ItemsType,
  UserActivitiesInitialState,
  UserActivitiesPostType,
} from './types';

const initialState: UserActivitiesInitialState = {
  items: [],
  userActivities: [],
  isLoading: false,
};

const NAME = 'userActivities';

const request: CaseReducer<
  UserActivitiesInitialState,
  PayloadAction<UserActivitiesPostType>
> = (state) => {
  state.isLoading = true;
};

const success: CaseReducer<
  UserActivitiesInitialState,
  PayloadAction<ItemsType[]>
> = (state, { payload }) => {
  state.items = [...payload];
  state.isLoading = false;
};

const failure: CaseReducer<UserActivitiesInitialState> = (state) => {
  state.isLoading = false;
};

const requestActivities: CaseReducer<
  UserActivitiesInitialState,
  PayloadAction<string>
> = (state) => {
  state.isLoading = true;
};

const successActivities: CaseReducer<
  UserActivitiesInitialState,
  PayloadAction<ItemsType[]>
> = (state, { payload }) => {
  state.userActivities = [...payload];
  state.isLoading = false;
};

const failureActivities: CaseReducer<UserActivitiesInitialState> = (state) => {
  state.isLoading = false;
};

export const {
  actions: userActivitiesActions,
  reducer: userActivitiesReducer,
} = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,

    requestActivities,
    successActivities,
    failureActivities,
  },
});
