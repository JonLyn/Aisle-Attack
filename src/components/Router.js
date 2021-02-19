import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/:userId" component={ StorePicker } />
      <Route exact path="/:userId/:storeId" component={ App } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

export default Router;