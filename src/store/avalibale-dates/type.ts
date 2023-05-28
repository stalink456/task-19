export type AvailableDates = {
  date: string;
  day: string;
  timeEnd: string;
  timeStart: string;
};

export type AvailableDatesInitialState = {
  availableDates: AvailableDates[];
  isLoading: boolean;
};

export type availableDatesRequestData = {
  dateStarted: string;
  dateFinished: string;
  groupId: number;
};
