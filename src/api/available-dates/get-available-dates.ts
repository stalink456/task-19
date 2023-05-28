import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import {
  AvailableDates,
  availableDatesRequestData,
} from 'store/avalibale-dates/type';

export const getAvailableDates = async (
  props: availableDatesRequestData
): Promise<AvailableDates[]> => {
  const { groupId, dateStarted, dateFinished } = props;

  const { data } = await HttpClient.call(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/group/${groupId}/availableDates?dateStart=${dateStarted}&dateEnd=${dateFinished}`
  );

  return data;
};
