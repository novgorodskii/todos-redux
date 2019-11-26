import React from "react";

import "./header.scss";

const Header = ({ todos }) => {
  return (
    <div className="header">
      <div className="header-status">
        <div className="header-status-item">Всего задач: {todos.length}</div>
        <div className="header-status-item">
          Выполненные: {todos.filter(todo => todo.completed).length}
        </div>
        <div className="header-status-item">
          Осталось: {todos.filter(todo => !todo.completed).length}
        </div>
      </div>

      <div className="header-title">Redux TODO</div>

      <div className="header-timer">Timer</div>
    </div>
  );
};
export default Header;
