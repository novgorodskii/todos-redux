import React from "react";
import Button from "./Button";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.store = this.props.store;
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const title = this.state.value;
    if (title) {
      this.props.addTodo(title);
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
