import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/wax-home.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Wax Revolution
          </h1>
          <p className="primary-text">
          Descubre todos los beneficios de nuestros salones de belleza, visitanos y conocenos. 
          </p>
          <button className="secondary-button">
            Más informacion<FiArrowRight />{" "}
          </button>
        </div>
        <div className="img-content">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
