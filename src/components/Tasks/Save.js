import React, { Component } from "react";
import { connect } from "react-redux";
import * as taskAction from "../../actions/taskAction";
class Save extends Component {
  changeUserId = event => {
    this.props.changeUserId(event.target.value);
  };

  changeTitle = event => {
    this.props.changeTitle(event.target.value);
  };

  save = () => {
    const { userId, title, add } = this.props;
    const newTask = {
      userId,
      title,
      completed: false
    };

    add(newTask);
  };
  render() {
    return (
      <div>
        <h1>Save Task</h1>
        User Id:
        <input
          type="number"
          value={this.props.userId}
          onChange={this.changeUserId}
        />
        <br />
        <br />
        Title:
        <input type="text" value={this.props.title} onChange={this.changeTitle} />
        <br />
        <br />
        <button onClick={this.save()}>Save</button>
      </div>
    );
  }
}
const mapStateToProps = ({ taskReducer }) => taskReducer;
export default connect(mapStateToProps, taskAction)(Save);
