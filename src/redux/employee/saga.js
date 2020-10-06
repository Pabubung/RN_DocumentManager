import { put, takeLatest, call } from 'redux-saga/effects';
import ApiCaller from '../../setting/employeeApi';
import { getEmployeeData } from '../../setting/employeeDataParser';

const fetchEventList = payload => ApiCaller('mobileIattend_listevent', 'post', null, payload).then(response => response);

export const watchEmployeeData = function* watchEmployeeData() {
  yield takeLatest('FETCH_EVENT_LIST', function* (action) {
    try {
      // const data = yield call(fetchEventList);
      const data = yield call(fetchEventList.bind(this, action.payload));
      const eventData = getEmployeeData(data);
      yield put({ type: 'EMPLOYEE_SUCCESS', payload: eventData });
    } catch (error) {
      yield put({ type: 'EMPLOYEE_ERROR', payload: error });
    }
  });
};