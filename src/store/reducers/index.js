import { combineReducers } from 'redux';
import userReducer from './userReducer';
export default combineReducers({
    userDetails:userReducer
});
