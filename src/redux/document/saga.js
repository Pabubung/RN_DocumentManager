import { put, takeLatest, call } from 'redux-saga/effects';
import ApiCaller from '../../setting/apiDocument';
import { getDocumentData } from '../../setting/documentParser';

const fetchDocument = payload => ApiCaller('getDocument', 'get', null, payload).then(response => response);
export const watchDocumentData = function* watchDocumentData() {
  yield takeLatest('FETCH_DOCUMENT_LIST', function* (action) {
    try {
      const data = yield call(fetchDocument.bind(this, action.payload));
      const documentData = data;
    //   console.log("Tes DOcument");
      yield put({ type: 'FETCH_DOCUMENT_SUCCESS', payload: documentData });
    } catch (error) {
      yield put({ type: 'FETCH_DOCUMENT_FAILED', payload: error });
    }
  });
};