import { put, takeLatest, call } from 'redux-saga/effects';
import ApiCaller from '../../setting/apiDiningHall';
import { getDiningHallData } from '../../setting/dininghallParser';

const fetchDiningHall = payload => ApiCaller('mobileIattend_listevent', 'post', null, payload).then(response => response);
export const watchDiningHallData = function* watchDiningHallData() {
  yield takeLatest('FETCH_DININGHALL_LIST', function* (action) {
    try {
      const data = yield call(fetchDiningHall.bind(this, action.payload));
      const diningHallData = getDiningHallData(data);
      console.log("Tes dining hall");
      yield put({ type: 'FETCH_DININGHALL_SUCCESS', payload: diningHallData });
    } catch (error) {
      yield put({ type: 'FETCH_DININGHALL_FAILED', payload: error });
    }
  });
};