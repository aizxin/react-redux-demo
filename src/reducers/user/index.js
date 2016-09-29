'use strict';
import * as types from '../../constants/ActionTypes';
// import initialState from './initialState';
const initialState = {
  users: [],
  user: {}
}
export default function user (state = initialState, action) {
    switch(action.type) {
        case types.SET_USER:
            return {
                ...state,
                users: action.data.users,
            };
        case types.ADD_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}