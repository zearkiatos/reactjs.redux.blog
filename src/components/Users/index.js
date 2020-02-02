import React, { Component } from "react";
import axios from 'axios';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: response.data
    });
  }
  ponerFilas = () =>
    this.state.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));
  render() {
    return (
      <div className="m-100">
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

export default Users;
