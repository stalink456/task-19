import React from 'react';
import { Routing } from 'components/routing';

import style from './app.module.css';

export const App: React.FC = () => {
  return (
    <div className={style.app}>
      <Routing />
    </div>
  );
};
