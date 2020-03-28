import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from './Menu';
import Users from './Users';
import Tasks from './Tasks';
import Publications from './Publications';
import SaveTask from "./Tasks/Save";
const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="m-100">
      <Route exact path='/' component={Users}/>
      <Route exact path='/Tasks' component={Tasks}/>
      <Route exact path='/Publications/:key' component={ Publications }/>
      <Route exact path='/Tasks/Save' component={ SaveTask }/>
      <Route exact path='/Tasks/Save/:userId/:taskId' component={ SaveTask }/>
    </div>
  </BrowserRouter>
);

export default App;
