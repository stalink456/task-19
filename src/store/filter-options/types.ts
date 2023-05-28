export type FilterValues = {
  value: string;
  label: string;
};

export type FilterOptionsType = Record<
  | 'district'
  | 'days'
  | 'online'
  | 'd0LevelId'
  | 'd1LevelId'
  | 'd2LevelId'
  | 'certificate'
  | 'area',
  FilterValues[]
>;

export type FilterOptionsInitialStateType = {
  isLoading: boolean;
} & FilterOptionsType;
