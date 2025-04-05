import { Link } from "react-router-dom"; //Importa il componente Link da React Router, utilizzato per fornire un collegamento client-side alla homepage
import "../styles/NotFound.css"; //Importa il foglio di stile

function NotFound() { //Definisce il componente funzionale NotFound, che verrà mostrato per tutte le rotte non trovate
  /* Renderizzazione del componente */
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">Errore 404</h1>
      <p className="notfound-text">La pagina che stai cercando non esiste.</p>
      <Link to="/" className="btn btn-orange">Torna alla Home</Link> {/* Link visivamente rappresentato come bottone che riporta l’utente alla homepage */}
    </div>
  );
}

export default NotFound; //Esporta NotFound come componente predefinito per essere usato nella route errorElement del router principale