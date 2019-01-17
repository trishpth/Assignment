import {store} from 'Store';

import {reducerConstants} from '../constants';

const initialState = {
    success: null,
    message: null,
    error: false,
    login: [],
    isLoggedIn: false,
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case reducerConstants.USER_LOGIN:
            return {
                ...state,
                success: false,
                message: null,
                error: false,
            }
        case reducerConstants.USER_LOGIN_ERROR:
            let message;
            if(action.payload) {
                if(action.payload.data.status == "420") {
                    message = action.payload.data.message;
                }
            } else if(action.error.message) {
                message = action.error.message;
            } else {
                message = action.error.data.message;
            }
            return {
                ...state,
                success: false,
                message: message,
                error: true,
            }
        case reducerConstants.USER_LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                message: null,
                error: false,
                login: action.payload,
                isLoggedIn: true,
            }
        case reducerConstants.LOGOUT:
                return {
                    ...state,
                    success: true,
                    message: null,
                    error: false,
                    login: [],
                    isLoggedIn: false,
                }
        default:
            return {
                ...state
            }
    }
}
