import { GET_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from "../actions";

const todoReducer = (state = {}, action) => {
  switch (action.type) {

    case ADD_TODO:
      return {
        title: action.title,
        id: action.id,
        completed: false
      };

    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });

    case EDIT_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        title: action.title
      });
    default:
      return state;
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos;

    case ADD_TODO:
      return [...state, todoReducer(undefined, action)];

    case DELETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];

    case TOGGLE_TODO:
      return state.map(todo => todoReducer(todo, action));

    case EDIT_TODO:
      return state.map(todo => todoReducer(todo, action));

    default:
      return state;
  }
};

export default reducer;

export const getFilteredTodos = (state, filter) => {
  switch (filter) {
    case "ALL":
      return state;

    case "COMPLETED":
      return state.filter(todo => todo.completed);

      case "UNCOMPLETED":
        return state.filter(todo => !todo.completed);
    default:
      return state;
  };
};