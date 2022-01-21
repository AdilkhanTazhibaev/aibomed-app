import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducer from "./reducers"
const middleware = [thunk]
const rootReducer = combineReducers(reducer)

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
))