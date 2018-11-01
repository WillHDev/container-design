import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { Router } from "react-router-dom";
//import registerServiceWorker from "./registerServiceWorker";
// import createHistory from "history/createBrowserHistory";
// const history = createHistory();
// <Router history={history}>
const middleware = applyMiddleware(thunk); //, logger

const store = createStore(rootReducer, middleware);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
//registerServiceWorker();
