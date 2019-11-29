import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import state from './state';
import reducer from "./reducers";
import App from "./App";
const store = createStore(reducer, state);

ReactDOM.render(
<Provider store={store} >
  <App />
</Provider>, document.getElementById("root"));
