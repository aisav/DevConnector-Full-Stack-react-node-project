import * as actionTypes from './types';
import axios from 'axios'


// Register User
export const registerUser = (userData, history) => dispatch => {
    axios.post('api/users/register', userData)
        .then(res => console.log(res.data))
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