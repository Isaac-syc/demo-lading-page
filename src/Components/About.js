import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/masaje.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Acerca de</p>
        <h1 className="primary-heading">
          Experiencias.
        </h1>
        <p className="primary-text">
          Descubre los beneficios de nuestro servicio en Depilación Permanente IPL y ahoira Lazer Diodo sin dolor "MEDIOSTAR".
        </p>
        <p className="primary-text">
          Revitaliza tu piel con nuestros paquetes de Radiofrecuencia en tensado Facial y Moldeado corporal con "ENDYMED".
        </p>
        <p className="primary-text">
          Recupera tus cejas soñadas con nuestra depilación de Hilo.
        </p>
        <p className="primary-text">
          Prueba Las mejores ceras de tu depilacion corporal facial
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Leer más</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver un video.
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
