import React, { Component } from "react";
import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import TableComponent from "./TableComponent";
class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  ponerContenido = () => {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }
    return <TableComponent/>
  };

  render() {
    return (
      <div>
        <h1>
          Users
        </h1>
        {this.ponerContenido()}
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, userAction)(Users);
