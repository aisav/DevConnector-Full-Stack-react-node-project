import * as actionTypes from './types';
import axios from 'axios'
import history from '../history'



// Register User
export const registerUser = (userData) => dispatch => {
    axios.post('api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch(
            {
                type: actionTypes.GET_ERRORS,
                payload: err.response.data
            }));
    // return {
    //     type: actionTypes.TEST_DISPATCH,
    //     payload: userData
    // }
}