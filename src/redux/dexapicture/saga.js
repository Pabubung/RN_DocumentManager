import { put, takeLatest, call } from 'redux-saga/effects';
import ApiCaller from '../../setting/apiPicture';
import { getEventListData } from '../../setting/eventDataParser';

const fetchEventList = payload => ApiCaller('mobileIattend_listevent', 'post', null, payload).then(response => response);
export const watchEventListData = function* watchEventListData() {
  yield takeLatest('FETCH_EVENT_LIST', function* (action) {
    try {
      // const data = yield call(fetchEventList);
      const data = yield call(fetchEventList.bind(this, action.payload));
      const eventData = getEventListData(data);
      console.log("Tes picture");
      yield put({ type: 'FETCH_EVENT_LIST_SUCCESS', payload: eventData });
    } catch (error) {
      yield put({ type: 'FETCH_EVENT_LIST_FAILED', payload: error });
    }
  });
};