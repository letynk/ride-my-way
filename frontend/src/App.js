import React, { Component } from "react";
import "./App.css";
import Home from "./component/Home.js";
import Driverdashboard from "./component/Driverdashboard.js";
import Driverprofile from "./component/Driverprofile.js";
import { Link, Switch, Route } from "react-router-dom";
import Riderdashboard from "./component/Riderdashboard.js";
import Riderprofile from "./component/Riderprofile.js";

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      showLoginForm: true,
      hideRidernav: true,
      hideDrivernav: true
    };
  }

  login = event => {
    event.preventDefault();

    console.log('It works!');

    var username = event.target[0].value;
    var password = event.target[1].value;

    console.log("Hey im here!");

    if (username === "driver" && password === "1234") {
      this.setState({
        showLoginForm: !this.state.showLoginForm,
        hideDrivernav: !this.state.hideDrivernav
      });
  

    } else if (username === "rider" && password === "1234") {
      this.setState({
        showLoginForm: !this.state.showLoginForm,
        hideRidernav: !this.state.hideRidernav
      });
    

    } else {
      alert("Wrong username or password!");
    }
  };


  render() {
    var showLoginForm = {
      display: this.state.showLoginForm ? "block" : "none"
    };

    var hideRidernav = {
      display: this.state.hideRidernav ? "none" : "block"
    };

    var hideDrivernav = {
      display: this.state.hideDrivernav ? "none" : "block"
    };

    return (
      <div>
        <div className="nav">
          <div className="logo">
            <h2>Ridemyway</h2>
          </div>

          <form onSubmit={this.login}>
            <div style={showLoginForm}>
              <input
                id="username"
                className="login-input"
                placeholder="username"
              />
              <input
                id="password"
                className="login-input"
                placeholder="password"
              />
               <input type="submit" className="login-btn" value="Login"/>
            </div>
          </form>

          <div style={hideRidernav}>
              <ul className="options">
                <Link to="/rider-dashboard">
                  <a>Dashboard</a>
                </Link>
                <Link to="/rider-profile">
                  <a>Profile</a>
                </Link>
                <Link to="/">
                  <a>Logout</a>
                </Link>
              </ul> 
          </div>

            <div style={hideDrivernav}>
              <ul className="options">
                <a>Offer Ride</a>
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

        <Switch>
          <Route path="/driver-dashboard" component={Driverdashboard} />
          <Route path="/driver-profile" component={Driverprofile} />
          <Route path="/rider-dashboard" component={Riderdashboard} />
          <Route path="/rider-profile" component={Riderprofile} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;
