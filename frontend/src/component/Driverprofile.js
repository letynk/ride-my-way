import React, { Component } from "react";
// import Dprofilenav from './Dprofilenav.js';
// import Dprofilehistory from './Dprofilehistory.js';
import "./driverstyles.css";
import DriverNavigation from "./DriverNavigation";

//  Driver profile
class Driverprofile extends Component {
    render() {
        return (
            <div>
                <DriverNavigation />
                <div class="driver-dashboard">
                    <p id="db-title">Profile: Driver</p>
                    <div class="db-section-1">
                        <p>Welcome section</p>
                    </div>

                    <div class="db-section-2">
                        <div class="ride-info">
                            <p> Personal Information</p>
                            <h5>First Name: </h5>
                            <h5>Last Name: </h5>
                            <h5>Email: </h5>
                        </div>
                        <div class="ride-offer">
                            <p> Car Information</p>
                            <h5>Car Type: </h5>
                            <h5>Car Number: </h5>
                        </div>
                        <div class="ride-status">
                            <p> Rides Given</p>
                            <h5>203 </h5>
                        </div>
                    </div>

                    <div class="db-section-3">
                        <div class="rider-history-list">
                            <p>Ride History</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Rider Name</th>
                                        <th>Pick-up location</th>
                                        <th>Destination</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Maria Anders</td>
                                        <td>Morrocco</td>
                                        <td>Nyanza Road</td>
                                        <td>
                                            <button>Pick-up</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maria Anders</td>
                                        <td>Morrocco</td>
                                        <td>Nyanza Road</td>
                                        <td>
                                            <button>Pick-up</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maria Anders</td>
                                        <td>Morrocco</td>
                                        <td>Nyanza Road</td>
                                        <td>
                                            <button>Pick-up</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Maria Anders</td>
                                        <td>Morrocco</td>
                                        <td>Nyanza Road</td>
                                        <td>
                                            <button>Pick-up</button>
                                        </td>
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
export default Driverprofile;
