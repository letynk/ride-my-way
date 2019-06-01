
import React, {Component} from 'react';

// Rdashboard
class Rdashboard extends Component {
    render() {
      return (
            <div className="driver-dashboard">

                    <p id="db-title">Dashboard: Rider</p>
                    <div className="db-section-1">
                        <p>Welcome section</p>
                        <input className="login-input" placeholder="Destination"/>
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
                                    <td><button>View</button></td>
                                    </tr>
                                    <tr>
                                        <td>Maria Anders</td>
                                        <td>Morrocco</td>
                                        <td><button>View</button></td>
                                    </tr>
                                    <tr>
                                        <td>Maria Anders</td>
                                        <td>Morrocco</td>
                                        <td><button>View</button></td>
                                    </tr>
                
                                    <tr>
                                        <td>Maria Anders</td>
                                        <td>Morrocco</td>
                                        <td><button>View</button></td>
                                    </tr>
                                </tbody>
                        
                            </table>
            
                        </div>
                        <div className="map">
            
                        </div>
            
                </div>
        </div>
      )
    }
  }export default Rdashboard;