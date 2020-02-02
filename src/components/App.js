import React from 'react';

const App = () => {
  return(
    <div className="m-100">
      <table clasName="table">
        <thead>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Correo
            </th>
            <th>
              Enlace
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>
              Pedro Capriles
            </td>
            <td>
              caprilespe@outlook.com
            </td>
            <td>
              pedrocapriles.io
            </td>
          </tr>
          <tr>
            <td>
              Platzi
            </td>
            <td>
              platzi@platzi.com
            </td>
            <td>
              platzi.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
