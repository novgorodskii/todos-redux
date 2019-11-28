import React from "react";
import TodoContainer from "./containers/TodoContainer";
import HeaderContainer from "./containers/HeaderContainer";
import FormContainer from "./containers/FormContainer";

import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <TodoContainer />
      <FormContainer />
    </div>
  );
};

export default App;