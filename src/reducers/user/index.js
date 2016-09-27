'use strict';
import * as types from '../../constants/ActionTypes';
import initialState from './initialState';

export default function user (state = initialState, action) {
    switch(action.type) {
        case types.SET_USER:
            return {
                ...state,
                users: action.data.users,
            };
        default:
            return state;
    }
}