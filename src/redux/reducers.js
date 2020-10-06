import { combineReducers } from 'redux';
import eventData from './dexapicture/reducer';
import diningHallData from './dininghall/reducer';
import documentData from './document/reducer';
import loginData from './login/reducer';
// import EmployeeRequest from './employee/reducer';

export default combineReducers({
	eventData,
	diningHallData,
	documentData,
	loginData,
	// EmployeeRequest
});
