import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const BackButton: React.FC = React.memo(() => {
  return (
    <React.Fragment>
      <Link to='/main'>
        <Button>Назад</Button>
      </Link>
    </React.Fragment>
  );
});
