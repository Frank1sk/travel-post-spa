/**Componente principale dell'applicazione: in questo caso è il layout principale e ospita tutte le rotte figlie (vedi main.jsx) */
import { Outlet } from "react-router-dom"; //Importa Outlet da React Router: è il componente che rappresenta il punto di uscita per le rotte figlie
import Navbar from "./components/Navbar"; //Importa il componente Navbar
import "./styles/App.css"; //Importa gli stili specifici dell'app definiti nel file App.css

function App() { //Funzione che definisce il componente principale App
  /**Renderizzazione di App */
  return (
    <>
      <header> {/* Sezione header che ospita il componente Navbar, visibile in ogni pagina */}
        <Navbar />
      </header>
      <main className="outlet-wrapper"> {/* Il contenuto principale cambia in base alla route attiva e viene inserito tramite Outlet */}
        <Outlet />{/* Punto in cui verranno renderizzate dinamicamente le pagine, ovvero verranno renderizzati dinamicamente i componenti in base alla route attiva */}
      </main>
      <footer></footer> {/* Footer vuoto, eventualmente utilizzabile per futuri contenuti fissi in fondo alla pagina */}
    </>
  );
}

export default App; //Esporta App come default, così può essere importato facilmente altrove (es. in main.jsx)