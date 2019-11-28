import Todo from "../components/Todo";
import { connect } from "react-redux";

import { deleteTodo, editTodo, toggleTodo } from "../actions";

const mapStateToProps = (state) => {
  return {
    todos: state 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    editTodo: (id, title) => dispatch(editTodo(id, title))
  };
}; 

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoContainer;