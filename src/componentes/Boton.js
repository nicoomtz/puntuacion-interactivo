import React from "react";
import "../styles/Boton.css";

function Boton({ id, controlarEstado, valor }) {
  return (
    <button
      className={"pregunta-btn btn"}
      id={id}
      onClick={controlarEstado}
      valor={valor}
    >
      {id}
    </button>
  );
}

export default Boton;
