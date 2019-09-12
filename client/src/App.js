import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Saved from "./Component/Pages/Saved";
import Search from "./Component/Pages/Search";
import NoMatch from "./Component/Pages/NoMatch";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/saved/:id" component={Saved} />
        <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
