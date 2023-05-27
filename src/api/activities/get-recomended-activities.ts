import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import { RecomendedActivity } from 'store/recomended-activities/types';

export const getRecomendedActivities = async (
  id: string
): Promise<RecomendedActivity[]> => {
  const { data } = await HttpClient.call(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/startPageRecommendations?userId=${id}`
  );

  return data;
};
