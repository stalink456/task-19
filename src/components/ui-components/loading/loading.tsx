import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import styles from './loading.module.css';

export const Loading: React.FC = React.memo(() => {
  const antIcon = <LoadingOutlined style={{ fontSize: 54 }} spin />;

  return (
    <div className={styles.loading}>
      <Spin indicator={antIcon} />
    </div>
  );
});
