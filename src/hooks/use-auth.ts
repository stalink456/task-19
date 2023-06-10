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
import { FormInstance } from 'antd';

export const useAuth = (form: FormInstance) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(authUserIdSelector);
  const authFIO = useAppSelector(authFIOSelector);
  const authDate = useAppSelector(authDateSelector);
  const authSex = useAppSelector(authSexSelector);
  const authIsLoading = useAppSelector(authIsLoadingSelector);

  const navigate = useNavigate();

  React.useEffect(() => {
    const path = process.env.REACT_APP_LTC
      ? process.env.REACT_APP_LTC + 'main'
      : '/main';

    if (userId) {
      navigate(path);
    }
  }, [userId]);

  const onFinish = (values: UserData) => {
    dispatch(authActions.request(values));
  };

  const handleChangeUser1 = () => {
    form.setFieldsValue({
      fio: '101406926',
      date: '21.06.1936',
      sex: 'male',
    });
  };

  const handleChangeUser2 = () => {
    form.setFieldsValue({
      fio: '101448764',
      date: '01.04.1967',
      sex: 'female',
    });
  };

  const handleChangeUser3 = () => {
    form.setFieldsValue({
      fio: '101388470',
      date: '03.07.1964',
      sex: 'female',
    });
  };

  return {
    userId,
    authFIO,
    authDate,
    authSex,
    authIsLoading,

    onFinish,
    handleChangeUser1,
    handleChangeUser2,
    handleChangeUser3,
  };
};
