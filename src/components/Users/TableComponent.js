import React from "react";
import { connect } from "react-redux";
const TableComponent = props => {
  const ponerFilas = () =>
    props.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));
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
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};
const mapStateToProps = reducers => {
  return reducers.userReducer;
};
export default connect(mapStateToProps)(TableComponent);
