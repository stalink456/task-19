import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import { ActivitiesType } from 'store/activities-search/types';
import { getPersonalActivitiesType } from 'store/personal-activities/types';

export const getPersonalActivities = async (
  props: getPersonalActivitiesType
): Promise<ActivitiesType[]> => {
  const { id, userId } = props;
  const { data } = await HttpClient.call(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/search?d3LevelId=${id}&userId=${userId}&active=1`
  );

  return data;
};
