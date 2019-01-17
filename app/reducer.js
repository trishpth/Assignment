// import Libraries
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as reduxFormReducer} from 'redux-form';

import homeReducer from './modules/home/reducers';
import signupReducer from './modules/signup_A/reducers';
import loginReducer from './modules/login_A/reducers';

// export global combined reducer
export const reducers = combineReducers({
        routing: routerReducer,
        form: reduxFormReducer,
        home : homeReducer,
        signUp : signupReducer,
        login : loginReducer
    }
);
