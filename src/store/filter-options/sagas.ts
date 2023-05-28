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
      d0LevelId,
      d1LevelId,
      d2LevelId,
      certificate,
      area,
    ]: FilterValues[][] = yield all([
      call(getFilterOptions, 'district'),
      call(getFilterOptions, 'days'),
      call(getFilterOptions, 'online'),
      call(getFilterOptions, 'd0LevelId'),
      call(getFilterOptions, 'd1LevelId'),
      call(getFilterOptions, 'd2LevelId'),
      call(getFilterOptions, 'certificate'),
      call(getFilterOptions, 'area'),
    ]);

    yield put(
      filterOptionsActions.success({
        district,
        days,
        online,
        d0LevelId,
        d1LevelId,
        d2LevelId,
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
