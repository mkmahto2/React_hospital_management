import React ,{Component} from 'react';


class Home extends React.Component{
    render(){
        return(
       
          <div>
        
          {/* header end */}
          {/* Banner start */}
          <section className="full-width owl-banner banner">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <figure>
                  <img src="images/banner3.jpg" alt="banner" title="banner" />
                </figure>
                <div className="banner-content full-width">
                  <div className="banner-info full-width">
                    <h2>Entrust your health </h2> 
                    <h2>With Our Doctors</h2>
                  </div>
                  <span className="full-width quality">Improving the Quality Of Life</span>
                  <div className="banner-btn full-width">
                    <a className="btn btn-default text-capitalize exp-info" href="#" role="button">Find Doctors Now</a>
                    <a className="btn btn-default text-capitalize explore" href="#" role="button">Book Appointment</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <figure>
                  <img src="images/banner1.jpg" alt="banner" title="banner" />
                </figure>
                <div className="banner-content full-width">
                  <span className="full-width quality">Welcome to Indo Doctors</span>
                  <div className="banner-info full-width">
                    <h2>Get Better Care</h2> 
                    <h2>For Your Health</h2> 
                  </div>
                  <div className="banner-btn full-width">
                    <a className="btn btn-default text-capitalize exp-info" href="#" role="button">Find Doctors Now</a>
                    <a className="btn btn-default text-capitalize explore" href="#" role="button">Book Appointment</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <figure>
                  <img src="images/banner2.jpg" alt="banner" title="banner" />
                </figure>
                <div className="banner-content full-width">
                  <div className="row">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6">
                      <div className="banner-info full-width">
                        <h2>We Provide Best</h2> 
                        <h2>Services That</h2> 
                        <h2>You Can Trust</h2>
                      </div>
                      <span className="full-width quality">Get the best professional medical help in your city.</span>
                      <div className="banner-btn full-width">
                        <a className="btn btn-default text-capitalize exp-info" href="#" role="button">See all Specialist</a>
                        <a className="btn btn-default text-capitalize explore" href="#" role="button">Book Appointment</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Banner end */}
          {/* Categories start */}
          <section className="full-width cat-section">
            <div className="container">
              <div className="row">
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat1 cat-border1">
                    <img src="images/cat1.png" />
                    <h4><a href="javascript:void(0)">General Physician</a></h4>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat2">
                    <img src="images/cat6.png" />
                    <h4><a href="javascript:void(0)">Gynecologists</a></h4>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat3">
                    <img src="images/cat3.png" />
                    <h4><a href="javascript:void(0)">Cardiologist</a></h4>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat4">
                    <img src="images/cat4.png" />
                    <h4><a href="javascript:void(0)">Neurologist</a></h4>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat5">
                    <img src="images/cat5.png" />
                    <h4><a href="javascript:void(0)">Pediatrist</a></h4>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat6 cat-border6">
                    <img src="images/cat2.png" />
                    <h4><a href="javascript:void(0)">Dental</a></h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat-border2 cat6">
                    <img src="images/cat1.png" />
                    <h4><a href="javascript:void(0)">Dermatologists</a></h4>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat5">
                    <img src="images/onco.png" />
                    <h4><a href="javascript:void(0)">Oncologists</a></h4>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat4">
                    <img src="images/opthal.png" />
                    <h4><a href="javascript:void(0)">Ophthalmologists</a></h4>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat3">
                    <img src="images/gen.png" />
                    <h4><a href="javascript:void(0)">General Surgeons</a></h4>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat2">
                    <img src="images/uro.png" />
                    <h4><a href="javascript:void(0)">Urologists</a></h4>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 col-12">
                  <div className="full-width text-center category cat1 cat-border-end">
                    <img src="images/psy.png" />
                    <h4><a href="javascript:void(0)">Psychiatrist</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Categories End */}
          {/* about us start */}
          <section className="full-width about-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 col-12">
                  <img src="images/image.png" />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 col-12">
                  <div className="about-desc">
                    <h5>Welcome To Indo Doctors</h5>
                    <h2>Complete Medical Solutions in One Place</h2>
                    <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, eu mollislorem primis in orci integer metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum porta justo integer at velna vitae auctor integer congue</p>
                    <button>Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about us end */}
          {/* departments start */}
          <section className="full-width dept-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 col-12">
                  <div className="full-width inner-div">
                    <span>OUR DEPARTMENTS</span>
                    <h2>We Take Care Of Your Life</h2>
                  </div>
                  <div className="full-width dept dept1">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="outer-div">
                          <img src="images/pedia.png" />
                        </div>
                      </div>
                      <div className="col-md-9">
                        <a href="#"><h3>General Physicians</h3></a>
                        <p>
                          Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.                                
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="full-width dept dept1">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="outer-div">
                          <img src="images/pedia.png" />
                        </div>
                      </div>
                      <div className="col-md-9">
                        <a href="#"><h3>Pediatrics</h3></a>
                        <p>
                          Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.                                
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="full-width dept dept1">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="outer-div">
                          <img src="images/pedia.png" />
                        </div>
                      </div>
                      <div className="col-md-9">
                        <a href="#"><h3>Dental</h3></a>
                        <p>
                          Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.                                
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 col-12 dept-img">
                  <img src="images/3763028.jpg" />
                </div>
              </div>
            </div>
          </section>
          {/* department ends */}
          {/* Footer start */}
          <section className="full-width footer">
            <div className="container">
              <div className="row">
                <div className="full-width">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                      <div className="full-width footer-nav">
                        <a className="navbar-brand logo" href="index.html">
                          <img src="images/logo.png" alt="logo" title="logo" />
                        </a>
                        <p className="text-justify">
                          Sed ut perspiciatis unde om is nerror sit voluptatem accustium dolorem tium totam rem aperam eaque ipsa quae ab illose inntore veritatis
                        </p>
                        <p className="footer-social">
                          <a target="_blank" href="#"><img src="images/facebook.png" /></a>
                          <a target="_blank" href="#"><img src="images/instagram.png" /></a>
                          <a target="_blank" href="#"><img src="images/twitter.png" /></a> 
                          <a target="_blank" href="#"><img src="images/youtube.png" /></a>
                          <a target="_blank" href="#"><img src="images/linkedin.png" /></a> 
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                      <div className="full-width footer-nav">
                        <h3>Quick Links</h3>
                        <img src="images/decor-brand.png" />
                        <ul className="full-width">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Our Services</a></li>
                          <li><a href="#">Make Appointments</a></li>
                          <li><a href="#">Departments</a></li>
                          <li><a href="#">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                      <div className="full-width footer-nav">
                        <h3>Important Links</h3>
                        <img src="images/decor-brand.png" />
                        <ul className="full-width">
                          <li><a href="#">Terms &amp; Conditions</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                          <li><a href="#">Return &amp; Refund Policy</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                      <div className="full-width footer-nav footer-contact">
                        <h3>Contact Us</h3>
                        <img src="images/decor-brand.png" />
                        <ul className="full-width">
                          <li><a href="javascript:void(0)"><i className="fa fa-phone" /></a><span> 1800-121-3637</span></li>
                          <li><a href="javascript:void(0)"><i className="fa fa-envelope" /></a><span> info@example.com</span></li>
                          <li><a href="javascript:void(0)"><i className="fas fa-map-marker-alt" /></a><span> 380 St Kilda Road,MelbourneVIC 3004, Australia</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="full-width footer-credit">
            <div className="container">
              <div className="row full-width">
                <div className="col-md-12 col-sm-12 col-12">
                  <div className="footer-credit text-center">
                    <p>Copyright © 2021 All Rights Reserved by <span><a href="https://webizysolutions.com">Webizy IT Solutions</a> </span></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Footer end */}
        </div>
        )
    }
}
export default Home