import React from "react";
import Star from "../imagenes/icon-star.svg";
import Boton from "../componentes/Boton";
import "../styles/Pregunta.css";

function Pregunta() {
  return (
    <div className="pregunta-container container">
      <img className="pregunta-estrella btn" src={Star} alt="Estrella" />
      <h1 className="pregunta-titulo">How did we do?</h1>
      <p className="pregunta-texto">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="pregunta-botones">
        <Boton id={1} />
        <Boton id={2} />
        <Boton id={3} />
        <Boton id={4} />
        <Boton id={5} />
      </div>
      <button className="pregunta-submit">SUBMIT</button>
    </div>
  );
}

export default Pregunta;
