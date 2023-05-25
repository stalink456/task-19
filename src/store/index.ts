import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notifications: notificationsReducer,
  },
  devTools: true,
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
