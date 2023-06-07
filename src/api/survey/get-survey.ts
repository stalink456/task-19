import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import { SurveyType } from 'store/survey/types';

export const getSurvey = async (): Promise<SurveyType[]> => {
  const { data } = await HttpClient.call(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/survey`
  );

  return data;
};
