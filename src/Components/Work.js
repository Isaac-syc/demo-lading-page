import React from "react";


const Work = () => {
  const workInfoData = [
    {

      title: "Contactanos",
      text: "Usa uno de nuestros contactos para realizar una cita en el horario de tu preferencia.",
    },
    {

      title: "Visitanos",
      text: "Localiza usando google maps tu local de Wax Revolution favorito y visitanos.",
    },
    {
      title: "Agenda tu cita",
      text: "Puedes agendar tu cita en cualquiera de nuestros establecimientos fisicos.",
    },
    {
      title: "Disfruta la experiencia Wax Revolucion.",
      text: "Nos esforzamos para brindar siempre la mejor atencion.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Trabajos</p>
        <h1 className="primary-heading">¿Como trabajamos?</h1>
        <p className="primary-text">
          Brindamos el mejor servicio de spa y cuidados de belleza, nos encargamos de cuidarte
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
