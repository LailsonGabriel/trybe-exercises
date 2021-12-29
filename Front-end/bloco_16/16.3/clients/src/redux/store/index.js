import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducerLogin } from '../reducers/reducer';

const rootReducer = combineReducers({ reducerLogin });

export const store = createStore(rootReducer, composeWithDevTools());