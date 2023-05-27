type ScheduleType = {
  day: string;
  timeBreak: number;
  timeEnd: string;
  timeStart: string;
};

export type ActivitiesType = {
  address: string;
  area: string;
  d1LevelName: string;
  d2LevelName: string;
  d3LevelName: string;
  dateFinished: string;
  dateStarted: string;
  district: string;
  groupId: number;
  schedule: ScheduleType[];
  scheduleActive: null;
  scheduleClosed: string;
  schedulePlanned: null;
};

export type SearchActivitiesInitialStateType = {
  items: ActivitiesType[];
  isLoading: boolean;
};

export type SearchActivitiesRequestType = {
  area?: string[];
  certificate?: string;
  d0LevelName?: string[];
  d1LevelName?: string[];
  d2LevelName?: string[];
  days?: string[];
  district?: string[];
  online?: string;
  query?: string;
};
