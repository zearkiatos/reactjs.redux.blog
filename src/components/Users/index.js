import React, { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import * as userAction from '../../actions/userAction';
class Users extends Component {

  componentDidMount() {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    // this.setState({
    //   users: response.data
    // });
    this.props.getUsers();
  }
  ponerFilas = () =>
    this.props.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));
  render() {
    console.log(this.props);
    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
}

export default connect(mapStateToProps, userAction)(Users);
