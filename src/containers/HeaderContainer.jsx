import Header from "../components/Header";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state 
  };
};

const ContainerHeader = connect(mapStateToProps)(Header);
export default ContainerHeader;