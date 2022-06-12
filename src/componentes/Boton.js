import React from "react";
import "../styles/Boton.css";

function Boton({ id, clickeado, manejarClic }) {
  return (
    <button
      className={clickeado ? "pregunta-btn btn clickeado" : "pregunta-btn btn"}
      id={id}
      clickeado={clickeado}
      manejarClic={manejarClic}
    >
      {id}
    </button>
  );
}

export default Boton;
