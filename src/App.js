import "./App.css";
import Pregunta from "./componentes/Pregunta";
import Enviado from "./componentes/Enviado";

function App() {
  return (
    <div className="App">
      <Pregunta />
      <Enviado valor={valor} />
    </div>
  );
}

export default App;
