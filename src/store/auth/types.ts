export type AuthTypeInitialStateType = {
  userId: string | null;
  fio: string | null;
  date: string | null;
  sex: string | null;
  isLoading: boolean;
};

export type UserData = Omit<AuthTypeInitialStateType, 'userId' | 'isLoading'>;
export type UserId = Pick<AuthTypeInitialStateType, 'userId'>;
