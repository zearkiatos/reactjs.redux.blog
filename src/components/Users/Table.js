import React from "react";
import { connect } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
import "../../styles/icons.css";
const Table = props => {
  const ponerFilas = () =>
    props.users.map((user, key) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link className="anchor" to={`/publications/${key}`}>
            <i className="fas fa-eye"></i>
          </Link>
        </td>
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
            <th></th>
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
export default connect(mapStateToProps)(Table);
