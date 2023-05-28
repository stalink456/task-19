export type ItemsType = {
  d0LevelName: string;
  d1LevelId: number;
  d2LevelId: number;
  d2LevelName: string;
  d3LevelId: number;
  d3LevelName: string;
  date: string;
  groupId: string;
  online: boolean;
  status: string;
  timeEnded: string;
  timeStarted: string;
  userId: number;
  workId: number;
};

export type UserActivitiesInitialState = {
  items: ItemsType[];
  userActivities: ItemsType[];
  isLoading: boolean;
};

export type UserActivitiesPostType = {
  userId: string;
  groupId: number;
  date: string;
  timeStart: string;
  timeEnd: string;
};
