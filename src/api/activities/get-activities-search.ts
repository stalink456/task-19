import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import {
  ActivitiesType,
  SearchActivitiesRequestType,
} from 'store/activities-search/types';
import { isEmptyValue } from 'utils/isEmptyValue';
import { generateLink } from 'utils/generateLink';

export const getActivitiesSearch = async (
  props: SearchActivitiesRequestType
): Promise<ActivitiesType[]> => {
  const {
    area,
    certificate,
    d0LevelName,
    d1LevelName,
    d2LevelName,
    days,
    district,
    online,
    query,
  } = props;

  const reqArea = isEmptyValue(area);
  const reqCertificate = isEmptyValue(certificate);
  const reqD0LevelName = isEmptyValue(d0LevelName);
  const reqD1LevelName = isEmptyValue(d1LevelName);
  const reqD2LevelName = isEmptyValue(d2LevelName);
  const reqDays = isEmptyValue(days);
  const reqDistrict = isEmptyValue(district);
  const reqOnline = isEmptyValue(online);
  const reqQuery = isEmptyValue(query);

  const link = generateLink(
    reqArea,
    reqCertificate,
    reqD0LevelName,
    reqD1LevelName,
    reqD2LevelName,
    reqDays,
    reqDistrict,
    reqOnline,
    reqQuery
  );

  console.log(link);
  const { data } = await HttpClient.call(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/search?${link}`
  );

  return data;
};
