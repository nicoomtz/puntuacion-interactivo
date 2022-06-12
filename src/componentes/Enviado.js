import React from "react";
import Imagen from "../imagenes/illustration-thank-you.svg";
import "../styles/Enviado.css";

function Enviado({ valor }) {
  return (
    <div className="enviado-container container">
      <img className="enviado-imagen" src={Imagen} alt="Gracias" />
      <div className="enviado-seleccion">You selected {valor} out of 5</div>
      <h1 className="enviado-gracias">Thank you!</h1>
      <p className="enviado-texto">
        We appreciated you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default Enviado;
