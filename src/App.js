import React from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/admin-control">
        <Admin />
      </Route>
    </Switch>
  );
}
