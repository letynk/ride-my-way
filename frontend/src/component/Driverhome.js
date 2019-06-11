import React, { Component } from "react";
import Driverdashboard from "./Driverdashboard";
import DriverNavigation from './DriverNavigation';


class Driverhome extends Component {

  render() {
    return (
        <div>
        <DriverNavigation />
        <Driverdashboard/>
      </div>
    );
  }
}
export default Driverhome;
