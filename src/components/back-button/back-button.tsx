import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const BackButton: React.FC = React.memo(() => {
  return (
    <React.Fragment>
      <Link to='/ltc/main'>
        <Button style={{ height: '2.5em' }}>Назад</Button>
      </Link>
    </React.Fragment>
  );
});
