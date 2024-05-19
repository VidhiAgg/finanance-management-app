import { thunk } from "redux-thunk";
import { financeReducer } from "./reducer";
import { createStore, applyMiddleware } from "redux";
const store = createStore(financeReducer, applyMiddleware(thunk));

export default store;