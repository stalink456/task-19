import { ActivitiesType } from 'store/activities-search/types';

export type PersonalActivitiesInitialState = {
  personalActivities: ActivitiesType[];
  isLoading: boolean;
};

export type getPersonalActivitiesType = {
  id: string;
  userId: string;
};
