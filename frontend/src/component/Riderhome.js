import React, { Component } from "react";
import Riderdashboard from "./Riderdashboard";
import RiderNavigation from "./RiderNavigation";

class Riderhome extends Component {
  render() {
    return (
      <div>
        <RiderNavigation />
        <Riderdashboard />
      </div>
    );
  }
}
export default Riderhome;
