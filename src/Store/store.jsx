import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";


import rootReducer from "./CurrencyReducers/index";


import { fetchCurrencySaga } from "./Saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)) );

sagaMiddleware.run(fetchCurrencySaga);

export default store;

