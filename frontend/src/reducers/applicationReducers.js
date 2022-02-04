import {
    APPLICATION_CREATE_FAILS,
    APPLICATION_CREATE_REQUEST,
    APPLICATION_CREATE_SUCCESS,
} from "../constants/applicationConstants";

export const createApplicationReducer = (state = {}, action) => {
    switch (action.type) {
        case APPLICATION_CREATE_REQUEST:
            return { ...state, loading: true };
        case APPLICATION_CREATE_SUCCESS:
            return { ...state, loading: false, applicationCreateInfo: action.payload };
        case APPLICATION_CREATE_FAILS:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};