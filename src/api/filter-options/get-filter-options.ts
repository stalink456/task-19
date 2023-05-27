import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import { FilterValues } from 'store/filter-options/types';

export const getFilterOptions = async (
  path: string
): Promise<FilterValues[]> => {
  const { data } = await HttpClient.call(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/filter/values/${path}`
  );

  return data;
};
