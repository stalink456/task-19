import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store';
import {
  authActions,
  authDateSelector,
  authFIOSelector,
  authIsLoadingSelector,
  authSexSelector,
  authUserIdSelector,
} from 'store/auth';
import { useAppDispatch } from 'store';
import { UserData } from 'store/auth/types';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(authUserIdSelector);
  const authFIO = useAppSelector(authFIOSelector);
  const authDate = useAppSelector(authDateSelector);
  const authSex = useAppSelector(authSexSelector);
  const authIsLoading = useAppSelector(authIsLoadingSelector);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (userId) {
      navigate('/ltc/main');
    }
  }, [userId]);

  const onFinish = (values: UserData) => {
    dispatch(authActions.request(values));
  };

  return {
    userId,
    authFIO,
    authDate,
    authSex,
    authIsLoading,

    onFinish,
  };
};
