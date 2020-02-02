import React from "react";

const App = () => {
  const ponerFilas = () => [
    <tr>
      <td>Pedro Capriles</td>
      <td>caprilespe@outlook.com</td>
      <td>pedrocapriles.io</td>
    </tr>,
    <tr>
      <td>Platzi</td>
      <td>platzi@platzi.com</td>
      <td>platzi.com</td>
    </tr>
  ];
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
          {ponerFilas()}
        </tbody>
      </table>
    </div>
  );
};

export default App;
