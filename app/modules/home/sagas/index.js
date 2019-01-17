import { call, put } from "redux-saga/effects";
import TradeAPI from "../requests/index";
import {reducerConstants, sagaConstants} from '../constants';
import {store} from 'Store';
import { push } from "react-router-redux";

export function* FetchUsers(action) {
  const {dispatch} = store;
  const response = yield call(TradeAPI.TradeAPI.fetchUsers, action);
  if(response.status == "200"){
    console.log(response)
    if(response.data.status == "421") {
        dispatch(push("/logout"));
    }
    yield put({
      type: reducerConstants.FETCH_USERS_SUCCESS,
      payload: response.data,
    });
  }else{
    yield put({
      type: reducerConstants.FETCH_USERS_ERROR,
      error: response,
    });
  }
}
