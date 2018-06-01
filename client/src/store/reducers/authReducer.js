import * as actionTypes from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {name: "from ininialState"}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TEST_DISPATCH:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}