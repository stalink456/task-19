import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import { ItemsType } from 'store/user-activities/types';

export const getUserActivities = async (
  userId: string
): Promise<ItemsType[]> => {
  const { data } = await HttpClient.call(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/user/${userId}/attends`
  );

  return data;
};
