// import Libraries
import { takeEvery, takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";

import { FetchUsers } from "./modules/home/sagas";
import {  UserSignup } from "./modules/signup/sagas";
import { UserLogin, UserLogout } from "./modules/login/sagas";

import { sagaConstants as HomeSagaConstants } from './modules/home/constants';
import { sagaConstants as SignUpSagaConstants } from './modules/signup/constants';
import { sagaConstants as LoginSagaConstants } from './modules/login/constants';

// main saga generators
export function* sagas() {
    yield [

       fork(takeLatest, SignUpSagaConstants.USER_SIGNUP, UserSignup),

    ];
}
