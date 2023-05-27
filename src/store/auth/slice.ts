import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthTypeInitialStateType, UserData } from './types';

const initialState: AuthTypeInitialStateType = {
  uuid: '94200f15-d1a5-479d-9b5a-93c525f03278', // поставить null!
  fio: null,
  date: null,
  sex: null,
  isLoading: false,
};

const NAME = 'auth';

const request: CaseReducer<
  AuthTypeInitialStateType,
  PayloadAction<UserData>
> = (state) => {
  state.isLoading = true;
};

const success: CaseReducer<AuthTypeInitialStateType, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.uuid = payload;
  state.isLoading = false;
};

const failure: CaseReducer<AuthTypeInitialStateType> = (state) => {
  state.isLoading = false;
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
