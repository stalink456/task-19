type Activity = {
  d3LevelId: number;
  title: string;
};

export type RecomendedActivity = {
  activities: Activity[];
  typeGroup: string;
};

export type RecomendedActivitiesInitialStateType = {
  recomendedActivities: RecomendedActivity[];
  isLoading: boolean;
};
