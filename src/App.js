import React from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { Switch, Route } from "react-router-dom";
import Publish from "./pages/Publish";

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/admin-control">
        <Admin />
      </Route>
      <Route exact path="/published">
        <Publish />
      </Route>
    </Switch>
  );
}
