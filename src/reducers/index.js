'use strict';
import { combineReducers } from 'redux';
import user from './user';
import login from './login';

const rootReducer = combineReducers({
    user,login
});

export default rootReducer;