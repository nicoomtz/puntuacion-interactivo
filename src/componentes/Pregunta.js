import React, { useState } from "react";
import Star from "../imagenes/icon-star.svg";
import Boton from "../componentes/Boton";
import "../styles/Pregunta.css";

function Pregunta({ setValor }) {

  function controlarEstado(e) {
    setValor(e.target.id);
  }

  function checkearClase() {
    if (document.querySelector('.hidden')){
      
      document.querySelector('.hidden').classList.remove('hidden')
      document.querySelector('.ver').classList.add('hidden')
      document.querySelector('.ver').classList.remove('ver')
    }
  }

  return (
    <div className="pregunta-container container ver">
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
          
        />
        <Boton
          id={2}
          onClick={() => controlarEstado()}
          controlarEstado={controlarEstado}
          
        />
        <Boton
          id={3}
          onClick={() => controlarEstado()}
          controlarEstado={controlarEstado}
        />
        <Boton
          id={4}
          onClick={() => controlarEstado()}
          controlarEstado={controlarEstado}
          
        />
        <Boton
          id={5}
          onClick={() => controlarEstado()}
          controlarEstado={controlarEstado}
          
        />
      </div>
      <button className="pregunta-submit" onClick={() => checkearClase()}>SUBMIT</button>
    </div>
  );
}

export default Pregunta;
