import { combineReducers } from 'redux';
import loggedIn from './loggedIn';

export default combineReducers({
    // All reducers here
    loggedIn: loggedIn
});