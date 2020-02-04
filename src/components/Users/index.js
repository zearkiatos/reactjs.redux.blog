import React, { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
class Users extends Component {

  // async componentDidMount() {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //   this.setState({
  //     users: response.data
  //   });
  // }
  ponerFilas = () =>
    this.props.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));
  render() {
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

export default connect(mapStateToProps, {/*Actions*/})(Users);
