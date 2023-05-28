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
    d0LevelId,
    d1LevelId,
    d2LevelId,
    days,
    district,
    online,
    query,
  } = props;

  const reqArea = isEmptyValue(area);
  const reqCertificate = isEmptyValue(certificate);
  const reqD0LevelId = isEmptyValue(d0LevelId);
  const reqD1LevelId = isEmptyValue(d1LevelId);
  const reqD2LevelId = isEmptyValue(d2LevelId);
  const reqDays = isEmptyValue(days);
  const reqDistrict = isEmptyValue(district);
  const reqOnline = isEmptyValue(online);
  const reqQuery = isEmptyValue(query);

  const link = generateLink(
    reqArea,
    reqCertificate,
    reqD0LevelId,
    reqD1LevelId,
    reqD2LevelId,
    reqDays,
    reqDistrict,
    reqOnline,
    reqQuery
  );

  const { data } = await HttpClient.call(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/search?${link}`
  );

  return data;
};
