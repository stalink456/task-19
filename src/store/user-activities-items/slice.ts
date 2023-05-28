import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserActivitiesItemsInitialState } from './types';
import { ItemsType } from 'store/user-activities/types';

const initialState: UserActivitiesItemsInitialState = {
  userActivities: [],
  userActivitiesLength: 0,
  isLoading: false,
};

const NAME = 'userActivitiesItems';

const request: CaseReducer<
  UserActivitiesItemsInitialState,
  PayloadAction<string>
> = (state) => {
  state.isLoading = true;
};

const success: CaseReducer<
  UserActivitiesItemsInitialState,
  PayloadAction<ItemsType[]>
> = (state, { payload }) => {
  state.userActivities = [...payload];
  state.userActivitiesLength = state.userActivities.length;
  state.isLoading = false;
};

const failure: CaseReducer<UserActivitiesItemsInitialState> = (state) => {
  state.isLoading = false;
};

export const {
  actions: userActivitiesItemsActions,
  reducer: userActivitiesItemsReducer,
} = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
