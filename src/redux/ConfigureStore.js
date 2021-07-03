import { applyMiddleware, combineReducers, createStore } from "redux";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import applicationReducer from "./reducers/applicationReducer";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    categoriesReducer,
    productsReducer,
    applicationReducer,
  }),
  applyMiddleware(thunk, logger)
);
