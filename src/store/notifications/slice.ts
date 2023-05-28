import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

export type NotificationsStateType = {
  notifications: {
    id?: string | null;
    type: 'success' | 'error' | null;
    message: string | null;
    description: string | null;
    duration?: number;
  };
};

const initialState: NotificationsStateType = {
  notifications: {
    id: null,
    type: null,
    message: null,
    description: null,
    duration: 2,
  },
};

const NAME = 'notifications';

const notifications: CaseReducer<
  NotificationsStateType,
  PayloadAction<NotificationsStateType>
> = (
  state,
  {
    payload: {
      notifications: { type, message, description },
    },
  }
) => {
  state.notifications = {
    id: null,
    type: null,
    message: null,
    description: null,
    duration: 2,
  };
  state.notifications = {
    ...state.notifications,
    type,
    message,
    description,
    id: v1(),
  };
};

export const { reducer: notificationsReducer, actions: notificationsActions } =
  createSlice({
    name: NAME,
    initialState,
    reducers: {
      notifications,
    },
  });
