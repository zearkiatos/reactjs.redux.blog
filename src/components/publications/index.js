import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
class Publications extends Component {
  componentDidMount() {
    if (!this.props.users.lenght) {
      this.props.getUsers()
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
const mapStateToProps = reducers => {
  return reducers.userReducer;
};
export default connect(mapStateToProps, userAction)(Publications);
