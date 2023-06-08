import React from 'react';
import { Button } from 'antd';

import styels from './exit-button.module.css';
import { useExitButton } from 'hooks/use-exit-button';

export const ExitButton: React.FC = React.memo(() => {
  const { showButton, handleExitButton } = useExitButton();

  const renderExitButton = () => {
    return showButton ? (
      <div className={styels.exit_button}>
        <Button danger size='large' onClick={handleExitButton}>
          Выход
        </Button>
      </div>
    ) : null;
  };

  return <React.Fragment>{renderExitButton()}</React.Fragment>;
});
