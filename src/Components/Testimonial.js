import React from "react";
import ProfilePic from "../Assets/profile-photo.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonios</p>

        <h1 className="primary-heading">¿Qué dicen de nosotros?</h1>
        <p className="primary-text">
          AGradecemos agregues un comentario despues de tu visita.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <div className="profile-photo">
        <img src={ProfilePic} alt="" />
        </div>   
        <p>
          Servicio increible, un excelente trato al cliente. 10/10
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Rata_gamer</h2>
      </div>
    </div>
  );
};

export default Testimonial;
