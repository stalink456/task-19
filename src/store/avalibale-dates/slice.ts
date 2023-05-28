import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AvailableDates,
  AvailableDatesInitialState,
  availableDatesRequestData,
} from './type';

const initialState: AvailableDatesInitialState = {
  availableDates: [],
  isLoading: false,
};

const NAME = 'availableDates';

const request: CaseReducer<
  AvailableDatesInitialState,
  PayloadAction<availableDatesRequestData>
> = (state) => {
  state.isLoading = true;
};

const success: CaseReducer<
  AvailableDatesInitialState,
  PayloadAction<AvailableDates[]>
> = (state, { payload }) => {
  state.availableDates = [...payload];
  state.isLoading = false;
};

const failure: CaseReducer<AvailableDatesInitialState> = (state) => {
  state.isLoading = false;
};

export const {
  actions: availableDatesActions,
  reducer: availableDatesReducer,
} = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
