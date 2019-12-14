import { combineReducers } from 'redux';
import loggedIn from './loggedIn';
import setToken from './setToken';
import getUser from './getUser';

export default combineReducers({
    // All reducers here
    loggedIn: loggedIn,
    setToken: setToken,
    getUser: getUser
});