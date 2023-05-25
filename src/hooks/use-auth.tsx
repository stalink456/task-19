import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store';
import {
  authActions,
  authAddressSelector,
  authDateSelector,
  authFIOSelector,
  authIsLoadingSelector,
  authSexSelector,
  authUUIDSelector,
} from 'store/auth';
import { useAppDispatch } from 'store';
import { UserData } from 'store/auth/types';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const authUUID = useAppSelector(authUUIDSelector);
  const authFIO = useAppSelector(authFIOSelector);
  const authDate = useAppSelector(authDateSelector);
  const authAddress = useAppSelector(authAddressSelector);
  const authSex = useAppSelector(authSexSelector);
  const authIsLoading = useAppSelector(authIsLoadingSelector);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authUUID) {
      navigate('/main');
    }
  }, [authUUID]);

  const onFinish = (values: UserData) => {
    dispatch(authActions.request(values));
  };

  return {
    authUUID,
    authFIO,
    authDate,
    authAddress,
    authSex,
    authIsLoading,

    onFinish,
  };
};
