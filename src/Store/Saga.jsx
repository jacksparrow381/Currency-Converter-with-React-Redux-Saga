import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { FetchCurrencies } from "../Service/currency.service";

import {
  GET_CURRENCY_FETCH,
  SET_CURRENCY_FETCH,
  
} from "./Actions";

function* fetchCurrency(action) {
  const user = yield call(FetchCurrencies, action.data );
  yield put({ type: SET_CURRENCY_FETCH, payload: user, });
}

export function* fetchCurrencySaga() {
  yield takeEvery(GET_CURRENCY_FETCH, fetchCurrency);
}
