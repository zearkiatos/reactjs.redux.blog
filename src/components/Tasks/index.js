import React, { Component } from "react";
import { connect } from "react-redux";
import * as taskAction from "../../actions/taskAction";
class Tasks extends Component {
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    console.log(this.props);
    return <div>Tasks Greetings</div>;
  }
}
const mapStateToProps = ({ taskReducer }) => taskReducer;
export default connect(mapStateToProps, taskAction)(Tasks);
