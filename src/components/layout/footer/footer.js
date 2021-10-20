import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span>Follow us on</span>
        <nav className="nav">
          <ul className="social">
            <li className="footer-icon">
              <a href="https://www.youtube.com/">
                <YouTubeIcon fontSize="large" />
              </a>
            </li>
            <li className="footer-icon">
              <a href="https://www.facebook.com/">
                <FacebookIcon fontSize="large" />
              </a>
            </li>
            <li className="footer-icon">
              <a href="https://www.instagram.com/">
                <InstagramIcon fontSize="large" />
              </a>
            </li>

            <li className="footer-icon">
              <a href="https://www.twitter.com/">
                <TwitterIcon fontSize="large" />
              </a>
            </li>
            <li className="footer-icon ">
              <a href="https://www.linkedin.com/">
                <LinkedInIcon fontSize="large" />
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="logo-con">
          <img src="/images/main.png" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
