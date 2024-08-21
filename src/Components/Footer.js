import React from 'react';
import './Footer.css';
import logo1 from '../assets/Images/company1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <a href=""><img src={logo1} alt="" className="img-fluid logo-footer"/></a>
                        <a href=""><h2  className="group"> Part Of:<br/><big  style={{fontFamily:'cursive',fontWeight:'bold',fontSize:"22px"}}>Black Grapes Group</big></h2></a>
                    </div>
                    <div className="col-md-3">
                        <div className="useful-link">
                            <h2>Useful Links</h2>
                            <img src="./assets/images/about/home_line.png" alt="" className="img-fluid"/>
                            <div className="use-links">
                                <li><a href="/home"><i className="fa-solid fa-angles-right"></i> Home</a></li>
                                <li><a href="/aboutus"><i className="fa-solid fa-angles-right"></i> About Us</a></li>
                                <li><a href="/services"><i className="fa-solid fa-angles-right"></i> Services</a></li>
                                <li><a href="/contact"><i className="fa-solid fa-angles-right"></i> Contact</a></li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="social-links">
                            <h2>Follow Us</h2>
                            <img src="./assets/images/about/home_line.png" alt=""/>
                            <div className="social-icons">
                                <li><a href="https://www.facebook.com/profile.php?id=61562430803825"><FontAwesomeIcon icon={faFacebookF} size="2x" style={{ color: '#3b5998', margin: '3px' }}  /></a></li>
                                <li><a href="https://www.instagram.com/blackgrapes_ias/"><FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#C13584', margin: '3px' }} /></a></li>
                                <li><a href="https://www.linkedin.com/in/black-grapes-investments-and-securities/"><FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: '#0e76a8', margin: '3px' }} /></a></li>
                                <li><a href="https://x.com/blackgrapes_ias"><FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#3b5998', margin: '3px' }} /></a></li>
                                <li><a href="https://www.youtube.com/@BlackGrapesInvestments"><FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: '#C13584', margin: '3px' }} /></a></li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="address">
                            <h2>Address</h2>
                            <img src="./assets/images/about/home_line.png" alt="" className="img-fluid"/>
                            <div className="address-links">
                                <li className="address1"><i className="fa-solid fa-location-dot"></i> Office No 1141,Scheme No 114,Part-I,Vijaynagar,Indore(M.P)-452010, Indore, India, Madhya Pradesh</li>
                              <p>Owner Email: <a href="mailto:blackgrapes.arpitjain@gmail.com" className="fa-solid fa-envelope">blackgrapes.arpitjain@gmail.com,</a></p>
                              <p>Senior Email: <a href="mailto:blackgrapesinvestments@gmail.com" className="fa-solid fa-envelope">blackgrapesinvestments@gmail.com</a></p>
                              <p>Owner No. : <a href="tel:+9039397884" className="fa-solid fa-phone">+91 9039397884,</a></p>
                                <p>Senior No. : <a href="tel:+9039397884" className="fa-solid fa-phone">+91 8518097884</a></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <section id="copy-right">
            <div className="copy-right-sec"><i className="fa-solid fa-copyright"></i>  
                Copyright © 2024 <a href="#">Black Grapes Investments and Securities</a>
            </div>
        </section>
    </>
  );
};

export default Footer;
