import { call, put } from "redux-saga/effects";
import SignupAPI from "../requests/index";
import {reducerConstants, sagaConstants} from '../constants';
import {store} from 'Store';
import { push } from "react-router-redux";

export function* FetchCountries(action) {
  const response = yield call(SignupAPI.SignupAPI.fetchCountries, action);
  if(response.status == "200"){
    yield put({
      type: reducerConstants.FETCH_COUNTRY_LIST_SUCCESS,
      payload: response.data,
    });
  }else{
    yield put({
      type: reducerConstants.FETCH_COUNTRY_LIST_ERROR,
      error: response,
    });
  }
}

export function* UserSignup(action) {
  const {dispatch} = store;
  const response = yield call(SignupAPI.SignupAPI.userSignup, action);
  if(response.status == "200"){
    yield put({
      type: reducerConstants.USER_SIGNUP_SUCCESS,
      payload: response.data,
    });
  
  }
}

export function* SendOtpMail(action) {
  const {dispatch} = store;
  const response = yield call(SignupAPI.SignupAPI.sendOtpMail, action);
  if(response.status == "200"){
    if(response.data.status == "200") {
      yield put({
        type: reducerConstants.SEND_OTP_EMAIL_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: reducerConstants.USER_SIGNUP_ERROR,
        payload: response,
      });
    }
  }else{
    yield put({
      type: reducerConstants.SEND_OTP_EMAIL_ERROR,
      error: response,
    });
  }
}

export function* FetchCompanyDetails(action) {
  const response = yield call(SignupAPI.SignupAPI.fetchCompanyDetails, action);
  if(response.status == "200"){
    yield put({
      type: reducerConstants.FETCH_COMPANY_DETAILS_SUCCESS,
      payload: response.data,
    });
  }else{
    yield put({
      type: reducerConstants.FETCH_COMPANY_DETAILS_ERROR,
      error: response,
    });
  }
}

export function* ResendOtp(action) {
    const response = yield call(SignupAPI.SignupAPI.resendOtp, action);
    if(response.status == "200"){
        yield put({
            type: reducerConstants.RESEND_OTP_SUCCESS,
            payload: response.data,
        })
    } else {
        yield put({
            type: reducerConstants.RESEND_OTP_ERROR,
            error: response,
        })
    }
}
