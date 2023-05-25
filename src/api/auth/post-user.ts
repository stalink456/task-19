import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import { UserData, UserId } from 'store/auth/types';

export const postUser = async (body: UserData): Promise<UserId> => {
  const response = await HttpClient.call<UserData>(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/user/set`,
    body
  );

  return response.data;
};
