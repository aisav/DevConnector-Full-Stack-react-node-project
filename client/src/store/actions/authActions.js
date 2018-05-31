import * as actionTypes from './types';


// Register User
export const registerUser = (userData) =>  {
    return {
        type: actionTypes.TEST_DISPATCH,
        payload: userData
    }
}