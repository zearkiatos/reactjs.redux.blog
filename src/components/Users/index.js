import React, { Component } from "react";
import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  ponerContenido = () => {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    }

    if(this.props.error) {
      return <Fatal message={this.props.error} />;
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>{this.ponerFilas()}</tbody>
      </table>
    );
  };
  ponerFilas = () =>
    this.props.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));
  render() {
    return <div>{this.ponerContenido()}</div>;
  }
}

const mapStateToProps = reducers => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, userAction)(Users);
