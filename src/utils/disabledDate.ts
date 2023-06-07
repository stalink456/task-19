import { Datetype } from 'components/card/types';
import { Moment } from 'moment';

export const disabledDate = (current: Moment, dates: Datetype[]) => {
  const currentDate = current.format('DD.MM.YYYY');
  return !dates.some((date) => date.date === currentDate);
};
