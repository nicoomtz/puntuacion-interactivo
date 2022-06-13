import "./App.css";
import Pregunta from "./componentes/Pregunta";
import Enviado from "./componentes/Enviado";
import Boton from "./componentes/Boton";
import { useState } from "react";

function App() {

  const [valor, setValor] = useState(0);

  return (
    <div className="App">
      <Pregunta setValor={setValor}/>
      <Enviado valor={valor} />
    </div>
  );
}

export default App;
