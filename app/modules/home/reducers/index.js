import {store} from 'Store';

import {reducerConstants} from '../constants';

const initialState = {
    success: null,
    message: null,
    error: false,
    users: [],
};
let newState = []
export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case reducerConstants.FETCH_USERS:
            return {
                ...state,
                success: false,
                message: null,
                error: false,
            }
        case reducerConstants.FETCH_USERS_ERROR:
            return {
                ...state,
                success: false,
                message: null,
                error: true,
            }
        case reducerConstants.FETCH_USERS_SUCCESS:
            return {
                ...state,
                success: true,
                message: null,
                error: false,
                users : action.payload,
            }
        default:
            return {
                ...state
            }
    }
}
