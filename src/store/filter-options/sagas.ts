import { all, call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { filterOptionsActions } from './slice';
import { FilterValues } from './types';
import { getFilterOptions } from 'api/filter-options/get-filter-options';

function* filterOptionsSaga() {
  try {
    const [
      district,
      days,
      online,
      d0LevelName,
      d1LevelName,
      d2LevelName,
      certificate,
      area,
    ]: FilterValues[][] = yield all([
      call(getFilterOptions, 'district'),
      call(getFilterOptions, 'days'),
      call(getFilterOptions, 'online'),
      call(getFilterOptions, 'd0LevelName'),
      call(getFilterOptions, 'd1LevelName'),
      call(getFilterOptions, 'd2LevelName'),
      call(getFilterOptions, 'certificate'),
      call(getFilterOptions, 'area'),
    ]);

    yield put(
      filterOptionsActions.success({
        district,
        days,
        online,
        d0LevelName,
        d1LevelName,
        d2LevelName,
        certificate,
        area,
      })
    );
  } catch (e) {
    yield put(filterOptionsActions.failure());
    yield put(
      notificationsActions.notifications({
        notifications: {
          type: 'error',
          message: 'Ошибка!',
          description: 'Что-то пошло не так',
        },
      })
    );
  }
}

export function* watchGetFilterOptionsSaga() {
  yield takeLatest(filterOptionsActions.request.type, filterOptionsSaga);
}
