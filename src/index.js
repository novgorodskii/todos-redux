import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import todos from './todos';

const rootElement = document.getElementById("root");
ReactDOM.render(<App initialData={todos} />, rootElement);
