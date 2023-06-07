import { FormInstance } from 'antd';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import {
  searchActivitiesActions,
  searchActivitiesIsLoadingSelector,
  searchActivitiesItemsSelector,
} from 'store/activities-search';
import { SearchActivitiesRequestType } from 'store/activities-search/types';
import {
  filterOptionsActions,
  filterOptionsAreaSelector,
  filterOptionsCertificateSelector,
  filterOptionsD0LevelIdSelector,
  filterOptionsD1LevelIdSelector,
  filterOptionsD2LevelIdSelector,
  filterOptionsDaysSelector,
  filterOptionsDistrictSelector,
  filterOptionsIsLoadingSelector,
  filterOptionsOnlineSelector,
} from 'store/filter-options';

export const useSearchActivities = () => {
  const formRef = React.useRef<FormInstance>(null);
  const dispatch = useAppDispatch();
  const district = useAppSelector(filterOptionsDistrictSelector);
  const days = useAppSelector(filterOptionsDaysSelector);
  const online = useAppSelector(filterOptionsOnlineSelector);
  const d0LevelId = useAppSelector(filterOptionsD0LevelIdSelector);
  const d1LevelId = useAppSelector(filterOptionsD1LevelIdSelector);
  const d2LevelId = useAppSelector(filterOptionsD2LevelIdSelector);
  const certificate = useAppSelector(filterOptionsCertificateSelector);
  const area = useAppSelector(filterOptionsAreaSelector);
  const isLoading = useAppSelector(filterOptionsIsLoadingSelector);
  const isLoadingSearch = useAppSelector(searchActivitiesIsLoadingSelector);
  const searchActivitiesItems = useAppSelector(searchActivitiesItemsSelector);

  React.useEffect(() => {
    dispatch(filterOptionsActions.request());
  }, []);

  const onFinish = (values: SearchActivitiesRequestType) => {
    dispatch(searchActivitiesActions.request(values));
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };

  return {
    formRef,
    district,
    days,
    online,
    d0LevelId,
    d1LevelId,
    d2LevelId,
    certificate,
    area,
    isLoading,
    isLoadingSearch,
    searchActivitiesItems,

    onFinish,
    onReset,
  };
};
