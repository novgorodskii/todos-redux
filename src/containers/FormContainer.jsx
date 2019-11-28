import Form from "../components/Form";
import { connect } from "react-redux";

import { addTodo } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: title => dispatch(addTodo(title))
  };
};

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;