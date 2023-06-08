import React from 'react';
import { Routing } from 'components/routing';
import { useApp } from 'hooks/use-app';

import style from './app.module.css';
import { SwitchFont } from 'components/switch-font';

export const App: React.FC = () => {
  const { contextHolder } = useApp();

  return (
    <div className={style.app}>
      {contextHolder}
      <SwitchFont />
      <Routing />
    </div>
  );
};
