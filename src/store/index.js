import { combineReducers, createStore, applyMiddleware } from "redux";
import { SampleReducer } from "./sampleStore/sample.reducer";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { enableMapSet } from "immer";

const rootReducer = (history) => {
  return combineReducers({
    sampleStore: SampleReducer,
    router: connectRouter(history),
  })
}

export const rootStore = (history) => {
  enableMapSet();
  const middleware = [thunk, routerMiddleware(history)];
  return createStore(
    rootReducer(history),
    {},
    composeWithDevTools(applyMiddleware(...middleware))
  );
};