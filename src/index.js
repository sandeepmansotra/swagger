import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";
import Login from "./components/Login";
import { UserRegister } from "./components/UserRegister";
import { UserCheck } from "./components/UserCheck";
const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={UserCheck} />
      <Route exact path="/register" component={UserRegister} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
