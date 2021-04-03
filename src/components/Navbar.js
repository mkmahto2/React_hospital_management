import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export class Navbar extends Component {
    render() {
        return (
            <div>
                 {/* header start */}
                 <header>
                 <div className="full-width">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mynav">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src="images/logo.png" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="whoarewe.html">Who are we</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link contact-nav" href="contactus.html">Contact Us</a>
                    </li>
                    <li className="nav-item btn-login-register"><a className="nav-link mat-button" href="login.html"><span className="mat-button-wrapper"> Sign In |</span></a></li>
                    <li className="nav-item " routerlink="/sign-in"><a className="nav-link mat-button" href="signup.html"><span className="mat-button-wrapper"> Register </span></a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
                 </header>
        
            </div>
        )
    }
}

export default Navbar
