import "./ResponsiveTopNav.css";

import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../_assets/logo.png";
import React from "react";

const ResponsiveTopNav = (props) => {
  return (
    <div>
      <nav className="top-nav">
        <div className="top-nav-logo">
          <img className="logo" src={Logo} alt="#" />
        </div>
        <ul className="top-nav-link-list">
          <li>{props.linkOneText}</li>
          <li>{props.linkTwoText}</li>
          <li>{props.linkThreeText}</li>
          <li>{props.linkFourText}</li>
          <li>{props.linkFiveText}</li>
        </ul>
        <ul className="top-nav-social-list">
          <li className="social-link">
            <FaLinkedinIn />
          </li>
          <li className="social-link">
            <BsFacebook />
          </li>
          <li className="social-link">
            <BsTwitter />
          </li>
          <li className="social-link">
            <BsGithub />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveTopNav;
