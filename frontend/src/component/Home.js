// import Backgroundvideo from './Backgroundvideo.js';
// import Navbar from './Navbar.js';
// import Registration from './Registration.js';
// import Driversignupmodal from './Driversignupmodal.js';
// import Ridersignupmodal from './Ridersignupmodal.js';

import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import bVideo from './assets/car.mp4';
import './home.css';


class Home extends Component {
    login = event => {
      event.preventDefault();

      console.log("It works!");

      var username = event.target[0].value;
      var password = event.target[1].value;

      console.log("Hey im here!");

      if (username === "driver" && password === "1234") {
        this.props.history.push('/driver-dashboard');
      } else if (username === "rider" && password === "1234") {
        this.props.history.push('/rider-dashboard');
      } else {
        alert("Wrong username or password!");
      }
    };

    render() {
      return (
          <div>
              <div className="nav">
                <div className="logo">
                  <h2>Ridemyway</h2>
                </div>

                <form onSubmit={this.login}>
                  <div>
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
                   
                      <button type="submit" className="login-btn">
                        Login
                      </button>
                   
                  </div>
                </form>
              </div>

            <video loop muted autoPlay id="vid">
                <source src={bVideo}  type='video/mp4'/>
            </video>

            <div className="welcomeMsg">    
                  <h1>Welcome to Ridemyway!</h1>
                  
                  <div className="sign-up-options">
                      
                          <h3>What would you like to be ?</h3>
              
                      <button id="sign-up-btn-drider" className="sign-up-btn" >A Driver</button>
                      <button id="sign-up-btn-rider" className="sign-up-btn"  >A Rider</button>
                  </div> 
            </div>

            {/* // driver signup model  */}
          <div id="driver-signup-box" >
                <div className="form-popup-driver" id="driver-signup-form">
                    <form  className="form-container">
                      <h1>Sign up as a Driver</h1>
                      <input className="input box-style" placeholder="First Name" type="First Name" required></input>
                      <input className="input box-style" placeholder="Last Name" type="Last Name" required></input>
                      <input className="input box-style" placeholder="Phone Number" type="Phone Number" required></input>
                      <input className="input box-style" placeholder="Email" type="Email" required></input>
                      <input className="input box-style" placeholder="Car Type" type="Car Type" required></input>
                      <input className="input box-style" placeholder="Car Number" type="Car Number" required></input>
                      <input className="input box-style" placeholder="Username" type="Username" required></input>
                      <input className="input box-style" placeholder="Password" type="Password" required></input>

                      <div className="sign-up-btns">
                        <button type="submit" className="btn">Submit</button>
                        <button type="button" className="btn cancel">Close</button>
                      </div>
                    </form>
                </div>
          </div>

            <div id="rider-signup-box" >
                <div className="form-popup" id="rider-signup-form">
                        <form  className="form-container">
                            <h1>Sign up as a Rider</h1>
                        
                            <input className="input box-style"  placeholder="First Name" type="First Name" required></input>
                            <input className="input box-style" placeholder="Last Name" type="Last Name" required></input>
                            <input className="input box-style"  placeholder="Phone Number" type="Phone Number" required></input>
                            <input className="input box-style" placeholder="Email" type="Email" required></input>
                            <input className="input box-style" placeholder="Username" type="Username" required></input>
                            <input className="input box-style" placeholder="Password" type="Password" required></input>
                        
                            <div className="sign-up-btns">
                                <button type="submit" className="btn" >Submit</button>
                                <button type="button" className="btn cancel" >Close</button>
                            </div>
                        </form>
                </div>
            </div> 


          
        </div>
      );
    }
  }
  

 
  export default withRouter(Home);
  