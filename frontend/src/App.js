import React, { Component } from "react";
import "./App.css";
import Home from "./component/Home.js";
import Driverhome from "./component/Driverhome.js";
import Riderhome from "./component/Riderhome.js";
import Driverprofile from "./component/Driverprofile.js";
import {Switch, Route} from "react-router-dom";
import Riderprofile from "./component/Riderprofile.js";

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
