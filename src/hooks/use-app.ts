import React from 'react';
import { notification } from 'antd';
import { useAppSelector } from 'store';
import { notificationsSelector } from 'store/notifications';

export const useApp = () => {
  const [api, contextHolder] = notification.useNotification();
  const notifications = useAppSelector(notificationsSelector);
  const { id, type, message, description, duration } =
    notifications.notifications;

  React.useEffect(() => {
    if (type && id) {
      api[type]({
        message,
        description,
        duration,
        key: id,
      });
    }
  }, [notifications]);

  return { contextHolder };
};
