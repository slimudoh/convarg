import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../assets/css/app.css";

import Home from "./../components/home";
import About from "./../components/about";
import Appointment from "./../components/appointment";
import Complete from "./../components/complete";
import Login from "./../components/login";
import Meeting from "./../components/meeting";
import Payment from "./../components/payment";
import Profile from "./../components/profile";
import Register from "./../components/register";
import Search from "./../components/search";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/appointments" component={Appointment} />
        <Route path="/complete" component={Complete} />
        <Route path="/login" component={Login} />
        <Route path="/meeting" component={Meeting} />
        <Route path="/payment" component={Payment} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Search} />
        <Route component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
