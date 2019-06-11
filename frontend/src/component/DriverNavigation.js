import React, {Component} from 'react'
import { Link, Switch, Route } from "react-router-dom";

class DriverNavigation extends Component {
    render(){
        return(
            <div className="nav">
          <div className="logo">
            <h2>Ridemyway</h2>
          </div>

          <div >
              <ul className="options">
                <Link to="/driver-dashboard">
                  <a>Dashboard</a>
                </Link>
                <Link to="/driver-profile">
                  <a>Profile</a>
                </Link>
                <Link to="/">
                  <a>Logout</a>
                </Link>
              </ul> 
          </div>
        </div>
        )
        }
}
export default DriverNavigation;