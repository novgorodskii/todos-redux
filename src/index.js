import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';

import reducer from './reducers';
import App from "./App";
import todos from "./todos";
import { addTodo, deleteTodo, editTodo, toggleTodo } from './actions';

const store = createStore(reducer, todos);
store.subscribe(() => console.log(store.getState()));
store.dispatch(addTodo('Проверить хранилище'));
store.dispatch(toggleTodo(5));
store.dispatch(editTodo(5, 'Удалить новую задачу'));
store.dispatch(deleteTodo(5));

const rootElement = document.getElementById("root");
ReactDOM.render(<App initialData={todos} />, rootElement);