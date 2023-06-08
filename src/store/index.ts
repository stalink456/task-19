import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';
import { recomendedActivitiesReducer } from './recomended-activities/slice';
import { filterOptionsReducer } from './filter-options';
import { searchActivitiesReducer } from './activities-search';
import { surveyReducer } from './survey/slice';
import { availableDatesReducer } from './avalibale-dates';
import { userActivitiesReducer } from './user-activities';
import { userActivitiesItemsReducer } from './user-activities-items';
import { personalActivitiesReducer } from './personal-activities';
import { surveyPostAnswerReducer } from './survey-post';
import { addressReducer } from './address';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notifications: notificationsReducer,
    recomendedActivities: recomendedActivitiesReducer,
    filterOptions: filterOptionsReducer,
    searchActivities: searchActivitiesReducer,
    survey: surveyReducer,
    availableDates: availableDatesReducer,
    userActivities: userActivitiesReducer,
    userActivitiesItems: userActivitiesItemsReducer,
    personalActivities: personalActivitiesReducer,
    surveyPostAnswer: surveyPostAnswerReducer,
    address: addressReducer,
  },
  devTools: true,
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
