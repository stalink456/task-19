import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { authActions, authUserIdSelector } from 'store/auth';

export const useExitButton = () => {
  const [showButton, setShowButton] = React.useState<boolean>(false);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userId = useAppSelector(authUserIdSelector);

  React.useEffect(() => {
    if (location.pathname !== '/') {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [location]);

  React.useEffect(() => {
    if (userId === null) {
      navigate('/');
    }
  }, [userId]);

  const handleExitButton = () => {
    if (window.confirm('Вы действительно хотите выйти из приложения?')) {
      dispatch(authActions.removeUsersData());
      navigate('/');
      window.location.reload();
    }
  };

  return {
    showButton,
    handleExitButton,
  };
};
