import {store} from 'Store';

import {reducerConstants} from '../constants';

const initialState = {
    success: null,
    message: null,
    error: false,
    loader : false,
    countries: [],
    companyDetails: [],
    otpData : [],
};

export default function signupReducer(state = initialState, action) {
    switch (action.type) {
       
        case reducerConstants.USER_SIGNUP:
            return {
                ...state,
                success: false,
                message: null,
                error: false,
                loader: true,
            }
        case reducerConstants.USER_SIGNUP_ERROR:
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
                loader: false,
            }
        case reducerConstants.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                success: true,
                message: null,
                error: false,
                loader: false,
                otpData : [],
            }
        default:
            return {
                ...state
            }
    }
}
