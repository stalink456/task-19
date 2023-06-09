import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import { OptionsType } from 'store/address/types';

export const getAddress = async (value: string): Promise<OptionsType[]> => {
  const response = await HttpClient.call<string>(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/addressAutofill?q=${value}&limit=20`
  );

  return response.data;
};
