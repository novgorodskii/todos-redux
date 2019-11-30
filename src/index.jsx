import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import { getTodos } from './actions';

fetch('api/todos')
  .then(response => response.json())
  .then(todos => store.dispatch(getTodos(todos)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
