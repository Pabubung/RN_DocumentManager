import { all } from 'redux-saga/effects';

import {watchEventListData} from './dexapicture/saga';
import {watchDiningHallData} from './dininghall/saga';
import {watchDocumentData} from './document/saga';
import {watchUserLogin} from './login/saga';
// import {watchEmployeeData} from './employee/saga';

// export default function* rootSaga(getState) {
// 	yield all([
// 		watchEventListData(),
// 		// watchEmployeeData()
// 	]);
// }

const rootSaga= function* rootSaga(){
	yield all([
		watchEventListData(),
		watchDiningHallData(),
		watchDocumentData(),
		watchUserLogin(),
	])
}
export default rootSaga;