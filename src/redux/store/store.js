import { createStore } from "redux";
import { allReducers } from "../reducers/combineReducers/combineReducers";

export const store = createStore(allReducers)