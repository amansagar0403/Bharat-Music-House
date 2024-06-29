import { thunk } from "react-redux"

import { legacy_createStore, applyMiddleware, combineReducers } from "react-redux";

const rootReducers = combineReducers({

})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))