import * as actionTypes from '../actions/types';
import isEmpty  from '../../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {name: "from initialState"}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TEST_DISPATCH:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}