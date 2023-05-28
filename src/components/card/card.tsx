import React from 'react';
import {
  Button,
  Modal,
  Radio,
  RadioChangeEvent,
  Space,
  Typography,
} from 'antd';
import { ActivitiesType } from 'store/activities-search/types';
import { useAppDispatch, useAppSelector } from 'store';
import {
  availableDatesActions,
  availableDatesIsLoadingSelector,
  availableDatesItemsSelector,
} from 'store/avalibale-dates';
import { Loading } from 'components/ui-components/loading';

import styles from './card.module.css';
import {
  userActivitiesActions,
  userActivitiesIsLoadingSelector,
} from 'store/user-activities';
import { authUserIdSelector } from 'store/auth';

export const Card: React.FC<ActivitiesType> = React.memo((props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
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
  const dispatch = useAppDispatch();
  const availableDates = useAppSelector(availableDatesItemsSelector);
  const isLoading = useAppSelector(availableDatesIsLoadingSelector);
  const userId = useAppSelector(authUserIdSelector);
  const isLoadingPostUserActivities = useAppSelector(
    userActivitiesIsLoadingSelector
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chooseDateActivity, setChooseDateActivity] = React.useState<
    null | string
  >(null);

  const showModal = () => {
    setIsModalOpen(true);
    dispatch(
      availableDatesActions.request({ groupId, dateStarted, dateFinished })
    );
  };

  const handleOk = () => {
    const dateArray = chooseDateActivity!.split(' ');
    dispatch(
      userActivitiesActions.request({
        userId: userId as string,
        groupId,
        date: dateArray[0],
        timeStart: dateArray[2],
        timeEnd: dateArray[2],
      })
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeDateACtivity = (event: RadioChangeEvent) => {
    setChooseDateActivity(event.target.value);
  };

  if (isLoadingPostUserActivities) {
    return <Loading />;
  }

  const renderAcceptActivity = () => {
    return isLoading ? (
      <Loading />
    ) : (
      <React.Fragment>
        <Typography.Text>
          Выберите подходящую дату и подтвердите запись
        </Typography.Text>
        <Radio.Group onChange={onChangeDateACtivity} name='dateTime'>
          <Space direction='vertical'>
            {availableDates.map(({ date, day, timeStart }) => {
              const time = `${date} ${day} ${timeStart}`;
              return (
                <Radio key={time} value={time}>
                  {time}
                </Radio>
              );
            })}
          </Space>
        </Radio.Group>
      </React.Fragment>
    );
  };

  return (
    <div className={styles.card}>
      <Space direction='vertical' size={8}>
        <Space direction='vertical' size={0}>
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
          Записаться!
        </Button>
        <Modal
          title='Выберите время'
          open={isModalOpen}
          onOk={handleOk}
          okText='Подтвердить!'
          cancelText='Закрыть'
          onCancel={handleCancel}
        >
          {renderAcceptActivity()}
        </Modal>
      </Space>
    </div>
  );
});
