import { all, call, put, takeLatest } from 'redux-saga/effects';
import { notificationsActions } from '../notifications';
import { filterOptionsActions } from './slice';
import { FilterOptionsType } from './types';
import { getFilterOptions } from 'api/filter-options/get-filter-options';

function* filterOptionsSaga() {
  try {
    const [
      districtRes,
      daysRes,
      onlineRes,
      d0LevelIdRes,
      d1LevelIdRes,
      d2LevelIdRes,
      certificateRes,
      areaRes,
    ]: FilterOptionsType[] = yield all([
      call(getFilterOptions, 'district'),
      call(getFilterOptions, 'days'),
      call(getFilterOptions, 'online'),
      call(getFilterOptions, 'd0LevelId'),
      call(getFilterOptions, 'd1LevelId'),
      call(getFilterOptions, 'd2LevelId'),
      call(getFilterOptions, 'certificate'),
      call(getFilterOptions, 'area'),
    ]);

    const { district } = districtRes;
    const { days } = daysRes;
    const { online } = onlineRes;
    const { d0LevelId } = d0LevelIdRes;
    const { d1LevelId } = d1LevelIdRes;
    const { d2LevelId } = d2LevelIdRes;
    const { certificate } = certificateRes;
    const { area } = areaRes;

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
