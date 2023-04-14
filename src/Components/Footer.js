import React from "react";
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Ayuda</span>
          <span>Comparir</span>
          <span>Testimonios</span>
          <span>Google Maps</span>
        </div>
        <div className="footer-section-columns">
          <span>961 1234 567</span>
          <span>help@waxr.com</span>
          <span>citas@waxr.com</span>
          <span>comentarios@waxr.com</span>
        </div>
        <div className="footer-section-columns">
          <div className="primary-subheading">
            Terminos y condiciones.
          </div>
          <div className="primary-subheading">
            Politicas de privacidad.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
