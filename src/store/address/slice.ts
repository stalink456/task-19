import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdressInitialStateType } from './types';

const initialState: AdressInitialStateType = {
  address: [],
};

const NAME = 'address';

const request: CaseReducer<AdressInitialStateType, PayloadAction<string>> = (
  state
) => {
  state.address = [];
};

const success: CaseReducer<AdressInitialStateType, PayloadAction<string[]>> = (
  state,
  { payload }
) => {
  state.address = [...payload];
};

const failure: CaseReducer<AdressInitialStateType> = (state) => {
  state.address = [];
};

export const { actions: addressActions, reducer: addressReducer } = createSlice(
  {
    name: NAME,
    initialState: initialState,
    reducers: {
      request,
      success,
      failure,
    },
  }
);
