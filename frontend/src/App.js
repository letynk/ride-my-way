import React, { Component } from "react";
import "./App.css";
import Home from "./component/Home.js";

import Driverdashboard from "./component/Driverdashboard.js";
import Driverhome from "./component/Driverhome.js";
import Riderhome from "./component/Riderhome.js";
import Driverprofile from "./component/Driverprofile.js";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Riderdashboard from "./component/Riderdashboard.js";
import Riderprofile from "./component/Riderprofile.js";
import PrivateRoute from "react-private-route";

class App extends Component {


  render() {
    return (
        <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/driver-dashboard" component={Driverhome} />
              <Route path="/rider-dashboard" component={Riderhome} />
              <Route exact path="/driver-profile" component={Driverprofile} />
              <Route exact path="/rider-profile" component={Riderprofile} />
        </Switch>
    );
  }
}
export default App;
