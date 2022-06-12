import React from "react";
import "../styles/Boton.css";

function Boton({ id }) {
  return (
    <button className={"pregunta-btn btn"} id={id}>
      {id}
    </button>
  );
}

export default Boton;
