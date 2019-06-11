import React, { Component } from "react";
// import Ridernavbar from './Ridernavbar.js';
// import Rdashboard from './Rdashboard';
// import Driverinfomodal from './Driverinfomodal.js';
// import RiderRoutes from './RiderRoutes.js';
// import { Link } from "react-router-dom";
import "./riderstyles.css";

//  Riderdashboard
class Riderdashboard extends Component {

//   constructor(){
//     super();
//     // this.state = {
//     //   rides: []
//     // };

//     componentDidMount() {
//       // fetch('/api/v1/rides')
//       // .then(res=>res.json())
//       // .then(rides=>this.setState({rides}));
//       console.log("bennett")
//   }
// }

  render() {
    return (
      <div>
        {/* Ridernavbar */}
        {/* <div className="nav">
                <div className="logo">
                    <h2>Ridemyway</h2>
                </div>
                <div>
                    <ul className="options">
                        <a>Dashboard</a>
                        <Link to="/rider-profile"><a >Profile</a></Link>
                        <a>Logout</a>
                    </ul>
                </div>
            </div> */}
        {/* Dashboard */}
        <div className="driver-dashboard">
          <p id="db-title">Dashboard: Rider</p>
          <div className="db-section-1">
            <p>Welcome section</p>
            <input className="login-input" placeholder="Destination" />
            <button className="login-btn"> Submit</button>
          </div>

          <div className="db-section-2">
            <div className="ride-info">
              <p>Rider Info</p>
              <h5>Destination: </h5>
              <h5>Price: </h5>
            </div>
            <div className="ride-offer">
              <p>Driver Info</p>
              <h5>Name: </h5>
              <h5>Car Type: </h5>
              <h5>Car Number: </h5>
            </div>
            <div className="ride-status">
              <p>Status</p>
              <p> Booked</p>
            </div>
          </div>

          <div className="db-section-3">
            <div className="rider-list">
              <p>Rides Available</p>
              <table>
                <thead>
                  <tr>
                    <th>Destination</th>
                    <th>Price</th>
                    <th>----------</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Maria Anders</td>
                    <td>Morrocco</td>
                    <td>
                      <button>View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Maria Anders</td>
                    <td>Morrocco</td>
                    <td>
                      <button>View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Maria Anders</td>
                    <td>Morrocco</td>
                    <td>
                      <button>View</button>
                    </td>
                  </tr>

                  <tr>
                    <td>Maria Anders</td>
                    <td>Morrocco</td>
                    <td>
                      <button>View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="map" />
          </div>
        </div>

        {/* Driver info modal */}
        <div id="driver-info-box">
          <div className="form-popup-driver" id="driver-info-form">
            <form className="form-container">
              <h1>Driver Info</h1>
              <h5>Name: </h5>
              <h5>Car Type: </h5>
              <h5>Car Number: </h5>
              <div className="sign-up-btns">
                <button type="submit" className="btn">
                  Accept
                </button>
                <button type="button" className="btn cancel">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <RiderRoutes/> */}
        {/* <Ridernavbar/> */}
        {/* <Rdashboard/> */}
        {/* <Driverinfomodal/> */}
      </div>
    );
  }
}
export default Riderdashboard;
