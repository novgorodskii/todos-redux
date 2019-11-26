import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

import "./todo.scss";

const Todo = ({ todos, toogleTodo, deleteTodo }) => {
  const todoList = todos.map(todo => (
    <div
      key={todo.id}
      className="todo-item"
      style={
        todo.completed
          ? { textDecoration: "line-through", opacity: "." }
          : { textDecoration: "none" }
      }
    >
      <Checkbox
        onClick={() => toogleTodo(todo.id)}
        color="default"
        checked={todo.completed}
      />
      {todo.title}
      <Checkbox
        onClick={() => deleteTodo(todo.id)}
        indeterminate
        color="default"
        style={{ marginLeft: "auto" }}
      />
    </div>
  ));

  return <div className="todo">{todoList}</div>;
};
export default Todo;
