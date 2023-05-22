import { useNavigate } from 'react-router-dom';
import { AuthType } from 'pages/auth/types';

export const useAuth = () => {
  const navigate = useNavigate();

  const onFinish = (values: AuthType) => {
    console.log('Success:', values);
    navigate('/main');
  };

  return {
    onFinish,
  };
};
