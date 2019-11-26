import React from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import "./index.scss";
import Form from "./components/Form";

export default class App extends React.Component {
  state = {
    todos: this.props.initialData
  };

  _nextId = this.state.todos.length;

  nextId = () => {
    return (this._nextId += 1);
  };

  addTodo = title => {
    const todo = {
      title,
      id: this.nextId(),
      completed: false
    };
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  deleteTodo = (id) => {
    const index = this.state.todos.findIndex(todo => todo.id === id);
    const todos = [
      ...this.state.todos.slice(0, index),
      ...this.state.todos.slice(index + 1)
    ];
    this.setState({ todos });
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
        <Todo todos={todos} deleteTodo={this.deleteTodo}  toogleTodo={this.toogleTodo} />
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}
