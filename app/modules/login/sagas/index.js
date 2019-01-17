import { call, put } from "redux-saga/effects";
import LoginAPI from "../requests/index";
import {reducerConstants, sagaConstants} from '../constants';
import {store} from 'Store';
import { push } from "react-router-redux";

export function* UserLogin(action) {
  const response = yield call(LoginAPI.LoginAPI.userLogin, action);
  let {dispatch} = store;
  if(response.status == "200"){
    if(response.data.status == "200") {
      yield put({
        type: reducerConstants.USER_LOGIN_SUCCESS,
        payload: response.data,
      });
      location.href = "./home";
    } else {
      yield put({
        type: reducerConstants.USER_LOGIN_ERROR,
        payload: response,
      });
    }
  }else{
    yield put({
      type: reducerConstants.USER_LOGIN_ERROR,
      error: response,
    });
  }
}

export function* UserLogout(action) {
  const response = yield call(LoginAPI.LoginAPI.userLogout, action);
  let {dispatch} = store;
  if(response.status == "200"){
      yield put({
        type: reducerConstants.LOGOUT,
        payload: response,
      });
      location.href = "./signup";
  }
}
