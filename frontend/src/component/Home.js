// import Backgroundvideo from './Backgroundvideo.js';
// import Navbar from './Navbar.js';
// import Registration from './Registration.js';
// import Driversignupmodal from './Driversignupmodal.js';
// import Ridersignupmodal from './Ridersignupmodal.js';

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import bVideo from './assets/car.mp4';
import './home.css';



class Home extends Component {
    render() {
      return (
          <div>
              {/* <div className="nav">
                <div className="logo">
                    <h2>Ridemyway</h2>
                </div>
                <div>
                    <input className="login-input" placeholder="username"/>
                    <input className="login-input" placeholder="password"/>
                    <Link to='./Riderdashboard.js'> <button  className="login-btn"> Login  </button></Link>
                </div>
              </div> */}

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
            {/* <Navbar/>
            <Backgroundvideo/>
            <Registration/> */}

            {/* <Driversignupmodal/> */}
            {/* <Ridersignupmodal/> */}
          
        </div>
      );
    }
  }
  
  export default Home;
  