import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

import "./todo.scss";

const Todo = ({ todos, toogleTodo }) => {
  const todoList = todos.map(todo => (
    <div
      key={todo.id}
      className="todo-item"
      onClick={() => toogleTodo(todo.id)}
      style={
        todo.completed
          ? { textDecoration: "line-through", opacity: "." }
          : { textDecoration: "none" }
      }
    >
      <Checkbox color="default" checked={todo.completed} />
      {todo.title}
    </div>
  ));
  return <div className="todo">{todoList}</div>;
};
export default Todo;
