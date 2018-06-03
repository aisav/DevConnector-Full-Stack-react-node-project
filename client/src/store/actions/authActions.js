import * as actionTypes from './types';
import axios from 'axios'
import jwt_decode from 'jwt-decode'

import history from '../history'
import setAuthToken from '../../utils/setAuthToken'



// Register User
export const registerUser = (userData) => dispatch => {
    axios.post('api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch(
            {
                type: actionTypes.GET_ERRORS,
                payload: err.response.data
            }));
}

// Login User
export const loginUser = (userData) => dispatch => {
    axios.post('api/users/login', userData)
        .then(res => {
            const {token} = res.data;
            localStorage.setItem('jwtToken', token)
            setAuthToken(token)
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => dispatch(
            {
                type: actionTypes.GET_ERRORS,
                payload: err.response.data
            }));
}

export const setCurrentUser = decoded => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (userData) => dispatch => {

    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}))


}
