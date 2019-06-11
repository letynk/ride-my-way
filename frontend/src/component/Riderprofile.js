import React, { Component } from "react";
import RiderNavigation from "./RiderNavigation";
import "./riderstyles.css";

//  Riderdashboard
class Riderprofile extends Component {
  render() {
    return (
      <div>
        <RiderNavigation />

        <div className="driver-dashboard">
          <p id="db-title">Profile: Rider</p>
          <div className="db-section-1">
            <p>Welcome section</p>
          </div>

          <div className="db-section-2">
            <div className="ride-info">
              <p> Personal Information</p>
              <h5>First Name: </h5>
              <h5>Last Name: </h5>
              <h5>Phone Number: </h5>
              <h5>Email: </h5>
            </div>

            <div className="ride-status">
              <p> Rides Taken</p>
              <h5>100</h5>
            </div>
          </div>

          <div className="db-section-3">
            <div className="rider-history-list">
              <p>Ride History</p>
              <table>
                <thead>
                  <tr>
                    <th>Rider Name</th>
                    <th>Pick-up location</th>
                    <th>Destination</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Maria Anders</td>
                    <td>Morrocco</td>
                    <td>Nyanza Road</td>
                    <td>$400</td>
                  </tr>
                  <tr>
                    <td>Maria Anders</td>
                    <td>Morrocco</td>
                    <td>Nyanza Road</td>
                    <td>$400</td>
                  </tr>
                  <tr>
                    <td>Maria Anders</td>
                    <td>Morrocco</td>
                    <td>Nyanza Road</td>
                    <td>$400</td>
                  </tr>

                  <tr>
                    <td>Maria Anders</td>
                    <td>Morrocco</td>
                    <td>Nyanza Road</td>
                    <td>$400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Riderprofile;
