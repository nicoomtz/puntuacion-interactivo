import React, { useState } from "react";
import Star from "../imagenes/icon-star.svg";
import Boton from "../componentes/Boton";
import "../styles/Pregunta.css";

function Pregunta() {
  const [valor, setValor] = useState(0);

  function controlarEstado(e) {
    setValor(e.target.id);
    console.log(valor);
  }

  return (
    <div className="pregunta-container container">
      <img className="pregunta-estrella btn" src={Star} alt="Estrella" />
      <h1 className="pregunta-titulo">How did we do?</h1>
      <p className="pregunta-texto">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="pregunta-botones">
        <Boton
          id={1}
          onClick={() => controlarEstado()}
          controlarEstado={controlarEstado}
          valor={valor}
        />
        <Boton
          id={2}
          onClick={() => controlarEstado()}
          controlarEstado={controlarEstado}
          valor={valor}
        />
        <Boton
          id={3}
          onClick={() => controlarEstado()}
          controlarEstado={controlarEstado}
          valor={valor}
        />
        <Boton
          id={4}
          onClick={() => controlarEstado()}
          controlarEstado={controlarEstado}
          valor={valor}
        />
        <Boton
          id={5}
          onClick={() => controlarEstado()}
          controlarEstado={controlarEstado}
          valor={valor}
        />
      </div>
      <button className="pregunta-submit">SUBMIT</button>
    </div>
  );
}

export default Pregunta;
