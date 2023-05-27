export type AuthTypeInitialStateType = {
  uuid: string | null;
  fio: string | null;
  date: string | null;
  sex: string | null;
  isLoading: boolean;
};

export type UserData = Omit<AuthTypeInitialStateType, 'uuid' | 'isLoading'>;
export type UserId = Pick<AuthTypeInitialStateType, 'uuid'>;
