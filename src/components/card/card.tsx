import React from 'react';
import moment from 'moment';
import { Button, DatePicker, Modal, Space, Typography } from 'antd';
import { ActivitiesType } from 'store/activities-search/types';
import { Loading } from 'components/ui-components/loading';
import { useCard } from 'hooks/use-card';
import { disabledDate } from 'utils/disabledDate';

import styles from './card.module.css';

export const Card: React.FC<ActivitiesType> = React.memo((props) => {
  const {
    address,
    area,
    d1LevelName,
    d2LevelName,
    district,
    groupId,
    dateFinished,
    dateStarted,
    scheduleClosed,
  } = props;

  const {
    time,
    isModalOpen,
    chooseDate,
    isLoading,
    availableDates,
    isLoadingPostUserActivities,

    showModal,
    handleCancel,
    onChange,
    handleOk,
  } = useCard({
    groupId,
    dateFinished,
    dateStarted,
  });

  const renderAcceptActivity = () => {
    return isLoading ? (
      <Loading />
    ) : (
      <React.Fragment>
        <Typography.Text>
          Выберите подходящую дату и подтвердите запись
        </Typography.Text>
        <Space direction='horizontal' className={styles.card__date_time}>
          <DatePicker
            size='large'
            disabledDate={(current) =>
              disabledDate(moment(current.toDate()), availableDates)
            }
            format='DD.MM.YYYY'
            onChange={onChange}
          />

          <Typography.Text className={styles.card__date_time_text}>
            {time ? `Доступное время: ${time}` : ''}
          </Typography.Text>
        </Space>
      </React.Fragment>
    );
  };

  return (
    <div className={styles.card}>
      <Space direction='vertical' size={8}>
        <Space direction='vertical' size={0} className={styles.card__category}>
          <Typography.Title
            type='secondary'
            level={5}
            style={{ margin: 0 }}
            className={styles.card__category_text}
          >
            {d1LevelName}
          </Typography.Title>
          <Typography.Text
            type='secondary'
            className={styles.card__activity_text}
          >
            {d2LevelName}
          </Typography.Text>
          <Typography.Text type='secondary'>
            Адрес: {address}, {area}, {district}
          </Typography.Text>
          <Typography.Text type='secondary'>Группа: {groupId}</Typography.Text>
          <Typography.Text type='secondary'>
            Время работы: {scheduleClosed}
          </Typography.Text>
        </Space>
        <Button type='primary' onClick={showModal}>
          Записаться
        </Button>
        <Modal
          title='Выберите время'
          open={isModalOpen}
          onOk={handleOk}
          cancelText='Закрыть'
          onCancel={handleCancel}
          footer={[
            <Button
              key='submit'
              type='primary'
              loading={isLoadingPostUserActivities}
              onClick={handleOk}
              disabled={chooseDate === null && time === null}
            >
              Подтвердить
            </Button>,
          ]}
        >
          {renderAcceptActivity()}
        </Modal>
      </Space>
    </div>
  );
});
