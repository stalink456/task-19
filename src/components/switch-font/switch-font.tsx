import React from 'react';
import { Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import styles from './switch-font.module.css';

export const SwitchFont: React.FC = React.memo(() => {
  const [font, setFont] = React.useState<string>('16px');

  const handleFontSizeChange = () => {
    if (font === '16px') {
      document.body.style.fontSize = '24px';
      setFont('24px');
    } else {
      document.body.style.fontSize = '16px';
      setFont('16px');
    }
  };

  return (
    <React.Fragment>
      <Space direction='horizontal' className={styles.switch_button}>
        <Button
          type='primary'
          size='large'
          onClick={handleFontSizeChange}
          style={{ height: '3em', width: '3em' }}
        >
          <SearchOutlined />
        </Button>
      </Space>
    </React.Fragment>
  );
});
