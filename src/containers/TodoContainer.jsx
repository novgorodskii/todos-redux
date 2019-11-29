import Todo from "../components/Todo";
import { connect } from "react-redux";

import { deleteTodo, editTodo, toggleTodo } from "../actions";

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case "ALL":
      return todos;

    case "COMPLETED":
      return todos.filter(todo => todo.completed);
    
      case "UNCOMPLETED":
        return todos.filter(todo => !todo.completed);
    default:
      return todos;
  };
};

const mapStateToProps = (state) => {
  return {
    todos: getFilteredTodos(state.todos, state.filter),
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