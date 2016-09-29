'use strict';
import * as types from '../../constants/ActionTypes';
import axios from 'axios';

const dataUser = {
                "users": [{
                    "id": 1,
                    "name": "小撸1",
                    'email': '11@qq.com'
                }, {
                    "id": 2,
                    "name": "小撸2",
                    'email': '22@qq.com'
                }, {
                    "id": 3,
                    "name": "小撸3",
                    'email': '33@qq.com'
                }]
            };

function fetchUsers () {
    return dataUser;
}

export function getUsers() {
    return function (dispatch) {
        // return fetchUsers().then((ret) => {
        //     if(ret.status === 200) {
        //         dispatch(setUsers(ret.data));
        //     }
        // });
        dispatch(setUsers(fetchUsers()));
    };
}

export function setUsers(data) {
    return {
        type: types.SET_USER,
        data
    };
}
export function addUser(data) {
    dataUser.users.push({id:dataUser.users.length+1,name:data.username,email:data.email})
    dispatch(getUsers());
}