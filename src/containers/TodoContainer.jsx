import { connect } from "react-redux";

import { getFilteredTodos } from "../reducers";
import { deleteTodo, editTodo, toggleTodo } from "../actions";
import Todo from "../components/Todo";

const mapStateToProps = state => {
  return {
    todos: getFilteredTodos(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    editTodo: (id, title) => dispatch(editTodo(id, title))
  };
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoContainer;
