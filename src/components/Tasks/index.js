import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as taskAction from "../../actions/taskAction";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

class Tasks extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  showContent = () => {
    const { tasks, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={error} />;
    }
    return Object.keys(tasks).map(userId => (
      <div key={userId}>
        <h2>User {userId}</h2>
        <div className="container-tasks">{this.pushTasks(userId)}</div>
      </div>
    ));
  };

  pushTasks = userId => {
    const { tasks } = this.props;
    const byUser = {
      ...tasks[userId]
    };

    return Object.keys(byUser).map(taskId => (
      <div key={taskId}>
        <input type="checkbox" defaultChecked={byUser[taskId].completed} />
        {byUser[taskId].title}
      </div>
    ));
  };
  render() {
    return (
    <div>
      <button>
        <Link to='/tasks/Save'>
          Add
        </Link>
      </button>
      {this.showContent()
    }</div>);
  }
}
const mapStateToProps = ({ taskReducer }) => taskReducer;
export default connect(mapStateToProps, taskAction)(Tasks);
