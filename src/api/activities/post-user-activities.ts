import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import { ItemsType, UserActivitiesPostType } from 'store/user-activities/types';

export const postUserActivities = async (
  props: UserActivitiesPostType
): Promise<ItemsType[]> => {
  const { userId, groupId, date, timeStart, timeEnd } = props;
  const body = { date: date, timeStart: timeStart, timeEnd: timeEnd };

  const { data } = await HttpClient.call(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/user/${userId}/sign/${groupId}`,
    body
  );

  return data;
};
