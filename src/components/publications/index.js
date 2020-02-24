import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import * as publicationAction from "../../actions/publicationAction";

const { getUsers } = userAction;
const { getPublications } = publicationAction;

class Publications extends Component {
  componentDidMount() {
    if (! this.props.userReducer.users.length) {
      this.props.getUsers();
    }
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <h1>publications</h1>
        <div>{this.props.match.params.key}</div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ userReducer, publicationReducer }) => {
  return {
    userReducer,
    publicationReducer
  };
};
const mapDispatchToProps = {
  getUsers,
  getPublications
};
export default connect(mapStateToProps, mapDispatchToProps)(Publications);
