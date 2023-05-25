import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import { UserId } from 'store/auth/types';

export const getUser = async (body: UserId) => {
  const { data } = await HttpClient.call<UserId>(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/user/get`,
    body
  );

  return data;
};
