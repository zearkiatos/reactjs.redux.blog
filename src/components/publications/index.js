import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import * as publicationAction from "../../actions/publicationAction";

const { getUsers } = userAction;
const { getPublicationByUser } = publicationAction;

class Publications extends Component {
  async componentDidMount() {
    if (! this.props.userReducer.users.length) {
      await this.props.getUsers();
    }
    this.props.getPublicationByUser(this.props.match.params.key);
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
  getPublicationByUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Publications);
