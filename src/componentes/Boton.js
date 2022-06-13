import React from "react";
import "../styles/Boton.css";

function Boton({ id, controlarEstado }) {
  return (
    <button
      className={"pregunta-btn btn"}
      id={id}
      onClick={controlarEstado}
    >
      {id}
    </button>
  );
}

export default Boton;
