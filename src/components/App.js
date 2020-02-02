import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'Pedro Capriles',
          email: 'caprilespe@outlook.com',
          website: 'pedrocapriles.io'
        },
        {
          name: 'Platzi',
          email: 'platzi@platzi.com',
          website: 'platzi.com'
        },
      ]
    }
  }
  ponerFilas = () => (
    this.state.users.map((user)=>(
      <tr>
        <td>
          {user.name}
        </td>
        <td>
          {user.email}
        </td>
        <td>
          {user.website}
        </td>
      </tr>
    ))
  );
  render(){
    return (
      <div className="m-100">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            {this.ponerFilas()}
          </tbody>
        </table>
      </div>
    );
  };

};

export default App;
