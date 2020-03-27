import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as taskAction from "../../actions/taskAction";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
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
  }

  disable = () => {
    const { userId, title, loading } = this.props;

    if (loading) {
      return true;
    }

    if (!userId || !title) {
      return true;
    }

    return false;
  }

  showAction = () => {
    const { error, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={error} />;
    }
  };
  render() {
    return (
      <div>
        {
          (this.props.return)? <Redirect to='/tasks' /> : ''
        }
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
        <input
          type="text"
          value={this.props.title}
          onChange={this.changeTitle}
        />
        <br />
        <br />
        <button onClick={this.save} disabled={this.disable()}>
          Save
        </button>
        {this.showAction()}
      </div>
    );
  }
}
const mapStateToProps = ({ taskReducer }) => taskReducer;
export default connect(mapStateToProps, taskAction)(Save);
