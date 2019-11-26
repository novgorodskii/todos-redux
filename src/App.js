import React from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import "./index.scss";

export default class App extends React.Component {
  state = {
    todos: this.props.initialData
  };

  toogleTodo = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      }
      return Object.assign({}, todo, {
        completed: !todo.completed
      });
    });
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <Header todos={todos} />
        <Todo todos={todos} toogleTodo={this.toogleTodo} />
      </div>
    );
  }
}
