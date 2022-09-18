import {legacy_createStore as createStore,applyMiddleware} from 'redux';
import { Reducer } from './reducer';
import thunk from "redux-thunk";

const addthunk = applyMiddleware(thunk);

export const store = createStore(Reducer,addthunk);