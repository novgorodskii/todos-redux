import React from "react";

import Button from "./Button";

export default class Form extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if( this.state.value !== '') {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button />
      </form>
    );
  }
}
