import React, { Component } from "react";

class Save extends Component {
  render() {
    return (
    <div>
        <h1>
          Save Task
        </h1>
        User Id:
        <input type="number" />
        <br /><br />
        Titulo:
        <input />
        <br /><br />
        <button>
          Save
        </button>
    </div>
    );
  }
}

export default Save;
