import React, {Component} from 'react';
// import Drivernavbar from './Drivernavbar.js';
// import Ddashboard from './Ddashboard.js';
// import Offerridemodal from './Offerridemodal.js';
// import DriverRoutes from './DriverRoutes.js';
import './driverstyles.css';

 //  Driverdashboard
class Driverdashboard extends Component {
    render() {
      return (
        <div>

         {/* // Drivernavbar */}
            {/* <div className="nav">
                <div className="logo">
                    <h2>Ridemyway</h2>
                </div>
                <div>
                    <ul className="options">
                        <a >Offer Ride</a>
                        <a >Profile</a>
                        <a >Logout</a>
                    </ul>
                </div>
            </div> */}

            <div className="driver-dashboard">
                <p id="db-title">Dashboard: Driver</p>
                <div className="db-section-1">
                    <p>Welcome section</p>
                </div>
            
                <div className="db-section-2">
            
                    <div className="ride-info">
                        <p>Rider Info</p>
                        <h5>Name: </h5>
                        <h5>Pick-up location: </h5>
            
                    </div>
                    <div className="ride-offer">
                        <p>Ride Offer</p>
                        <h5>Destination: </h5>
                        <h5>Price: </h5>
            
                    </div>
                    <div className="ride-status">
                        <p>Status</p>
                        <p> Available</p>
                    </div>
                </div>
            
                <div className="db-section-3">
            
            
                    <div className="rider-list">
                        <p>Rider List</p>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Pick-up location</th>
                                <th>Pick-Rider</th>
                            </tr>
                            <tr>
                                <td>Maria Anders</td>
                                <td>Morrocco</td>
                                <td><button>Pick-up</button></td>
                            </tr>
                            <tr>
                                <td>Maria Anders</td>
                                <td>Morrocco</td>
                                <td><button>Pick-up</button></td>
                            </tr>
                            <tr>
                                <td>Maria Anders</td>
                                <td>Morrocco</td>
                                <td><button>Pick-up</button></td>
                            </tr>
            
                            <tr>
                                <td>Maria Anders</td>
                                <td>Morrocco</td>
                                <td><button>Pick-up</button></td>
                            </tr>
                        </table>
            
                    </div>
                    <div className="map">
            
                    </div>
            
                </div>
            </div>


            <div id="driver-offer-box">
                <div className="form-popup-driver" id="driver-signup-form">
                    <form className="form-container">
                        <h1>Offer Ride</h1>

                        <input className="input box-style" placeholder="Destination" type="Destination" required></input>
                        <input className="input box-style" placeholder="Price" type="Price" required></input>
                        <div className="sign-up-btns">
                            <button type="submit" className="btn" >Submit</button>
                            <button type="button" className="btn cancel">Close</button>
                        </div>

                    </form>
                </div>
            </div>
            {/* <DriverRoutes/> */}
            {/* <Drivernavbar/> */}
            {/* <Ddashboard/> */}
            {/* <Offerridemodal/> */}
        </div>
      );
    }
  }
export default Driverdashboard;



