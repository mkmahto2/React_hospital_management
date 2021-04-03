import React ,{Component} from 'react';


class Contact extends React.Component{
    render(){
        return(
            <div>
                  {/* header start */}
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
        {/* header end */}
        {/* Banner start */}
        <section className="full-width contact-banner">
          <div className="full-width">
            <figure>
              <img src="images/contact.jpg" alt="banner" title="banner" />
            </figure>
            <div className="banner-content full-width">
              <div className="row">
                <div className="col-md-6" />
                <div className="col-md-6">
                  <div className="banner-info full-width">
                    <h2>Contact Us</h2> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner end */}
        {/* Contact form start */}
        <section className="full-width contact-form-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-8 col-xs-12 col-12">
                <div className="full-width inner-div">
                  <h2>Contact Us</h2>
                  <img src="images/decor-brand.png" />
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
                  <form className="signup-form">
                    <div className="full-width box_side_icon">
                      <div className="row">
                        <div className="col-md-6">
                          <input type="text" className="form-control" name placeholder="Full Name" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" placeholder="Email Address" className="form-control" name />
                        </div>
                        <div className="col-md-6">
                          <input type="text" placeholder="Mobile Number" className="form-control" name />
                        </div>
                        <div className="col-md-6">
                          <input type="text" placeholder="Subject" className="form-control" name />
                        </div>
                        <div className="col-md-12">
                          <textarea placeholder="Your Message Goes Here.." className="form-control" defaultValue={""} />
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="btn btn-contact">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 col-12 column2">
                <img src="images/login.png" />
              </div>
            </div>
          </div>
        </section>
            </div>
            )
        }
    }
    export default Contact