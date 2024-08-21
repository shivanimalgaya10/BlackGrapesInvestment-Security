import React from "react";
import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
      <div className="contact-social-container container-fluid">
        <div className="contact-info row">
        <div class="col-4">
          <p style={{inlineSize: "max-content"}}>
            Email:
            <a href="blackgrapesinvestments@gmail.com" className="contact-link">
              blackgrapesinvestments@gmail.com
            </a>
          </p>
          </div>
          <div class="col-4">
          <p style={{inlineSize: "max-content"}}>
            Mobile No:{" "}
            <a href="tel:+9039397884" className="contact-link">
              +91 9039397884 ,
            </a>
          </p>
          </div>
          <div class="col-4">
          <div className="social-icons">
            <li>
              <a href="https://www.facebook.com/profile.php?id=61562430803825">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="2x"
                  style={{ color: "#3b5998", marginRight: "10px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/blackgrapes_ias/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  style={{ color: "#C13584", marginRight: "10px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/black-grapes-investments-and-securities/">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  style={{ color: "#0e76a8", marginRight: "10px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://x.com/blackgrapes_ias">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  style={{ color: "#3b5998", marginRight: "10px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@BlackGrapesInvestments">
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="2x"
                  style={{ color: "#C13584", marginRight: "10px" }}
                />
              </a>
            </li>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
