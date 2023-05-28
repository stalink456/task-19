import { ItemsType } from 'store/user-activities/types';

export type UserActivitiesItemsInitialState = {
  userActivities: ItemsType[];
  userActivitiesLength: number;
  isLoading: boolean;
};
