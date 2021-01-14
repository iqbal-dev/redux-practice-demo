import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from './userType';
import axios from 'axios'
export const fetchUsersRequest = ()=>{
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = user => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

export const fetchUsersError = error => {
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}

export const fetchData = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data;
                fetchUsersSuccess(users)
            })
            .catch(error => {
                const errorMessage = error.message;
                fetchUsersError(errorMessage)
        })
    }
}