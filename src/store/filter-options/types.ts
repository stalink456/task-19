export type FilterValues = {
  value: string;
};

export type FilterOptionsType = Record<
  | 'district'
  | 'days'
  | 'online'
  | 'd0LevelName'
  | 'd1LevelName'
  | 'd2LevelName'
  | 'certificate'
  | 'area',
  FilterValues[]
>;

export type FilterOptionsInitialStateType = {
  isLoading: boolean;
} & FilterOptionsType;
