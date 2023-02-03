import { combineReducers } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import newsReducer from "../slice/index";
import { configureStore } from "@reduxjs/toolkit";
import { requestEpic } from "../epics/index";

const reducer = combineReducers({
  news: newsReducer,
});

const epic = combineEpics(requestEpic);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(epic);

export default store;
