import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthTypeInitialStateType, UserData } from './types';

const initialState: AuthTypeInitialStateType = {
  userId: '101391104', // поставить null! '101391104'
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
  state.userId = payload;
  state.isLoading = false;
};

const failure: CaseReducer<AuthTypeInitialStateType> = (state) => {
  state.isLoading = false;
};

const removeUsersData: CaseReducer<AuthTypeInitialStateType> = (state) => {
  state.userId = null;
  state.fio = null;
  state.date = null;
  state.sex = null;
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
    removeUsersData,
  },
});
