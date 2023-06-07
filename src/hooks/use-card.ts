import React from 'react';
import { DatePickerProps } from 'antd/es/date-picker';
import { useAppDispatch, useAppSelector } from 'store';
import { authUserIdSelector } from 'store/auth';
import {
  availableDatesActions,
  availableDatesIsLoadingSelector,
  availableDatesItemsSelector,
} from 'store/avalibale-dates';
import {
  userActivitiesActions,
  userActivitiesIsLoadingSelector,
} from 'store/user-activities';

type UseCardType = {
  groupId: number;
  dateFinished: string;
  dateStarted: string;
};

export const useCard = ({
  groupId,
  dateFinished,
  dateStarted,
}: UseCardType) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [chooseDate, setChooseDate] = React.useState<string | null>(null);
  const [time, setTime] = React.useState<string | null>(null);
  const dispatch = useAppDispatch();
  const availableDates = useAppSelector(availableDatesItemsSelector);
  const isLoading = useAppSelector(availableDatesIsLoadingSelector);
  const userId = useAppSelector(authUserIdSelector);
  const isLoadingPostUserActivities = useAppSelector(
    userActivitiesIsLoadingSelector
  );

  const showModal = () => {
    setIsModalOpen(true);
    dispatch(
      availableDatesActions.request({ groupId, dateStarted, dateFinished })
    );
  };

  React.useEffect(() => {
    if (!isLoadingPostUserActivities) {
      setIsModalOpen(false);
      setTime(null);
      setChooseDate(null);
    }
  }, [isLoadingPostUserActivities]);

  const handleOk = () => {
    dispatch(
      userActivitiesActions.request({
        userId: userId as string,
        groupId,
        date: chooseDate as string,
        timeStart: time as string,
        timeEnd: time as string,
      })
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange: DatePickerProps['onChange'] = (_, dateString) => {
    if (dateString) {
      setChooseDate(dateString);
      const [{ timeStart }] = availableDates.filter(
        ({ date }) => date === dateString
      );
      setTime(timeStart);
    } else {
      setTime(null);
    }
  };

  return {
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
  };
};
