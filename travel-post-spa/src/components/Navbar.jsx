import { useState, useEffect } from "react"; //Importa gli hook useState e useEffect di React
import { NavLink } from "react-router-dom"; //Importa NavLink, componente di React Router che gestisce link con stile condizionale in base alla route attiva
import "../styles/Navbar.css"; //Importa gli stili della navbar

function Navbar() { //Definisce il componente funzionale Navbar
  const [isOpen, setIsOpen] = useState(false); //Stato locale per gestire l’apertura/chiusura del menu a tendina su mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); //Stato locale che determina se la viewport è mobile o meno, basato sulla larghezza iniziale della finestra

  useEffect(() => { //useEffect a cui viene passata la funzione di callback che esegue gli effetti:
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 600);
      if (window.innerWidth > 600) setIsOpen(false);
    }; //1) Funzione che aggiorna isMobile in base alla larghezza della finestra. Se si torna alla versione desktop, il menu viene automaticamente chiuso

    window.addEventListener("resize", checkIfMobile); //2) Aggiunge un listener all’evento resize della finestra...
    return () => window.removeEventListener("resize", checkIfMobile); //...e lo rimuove al cleanup del componente
  }, []); //la funzione di callback viene eseguita solo una volto dopo che il componente è stato renderizzato la prima volta (array di dipendenze vuoto)

  const toggleMenu = () => setIsOpen(!isOpen); //Funzione per alternare l'apertura del menu mobile

  const closeMenu = () => {
    if (isMobile) setIsOpen(false);
  }; //Funzione che chiude il menu mobile solo se si è su un dispositivo mobile

  /* Renderizzazione del componente */
  return (
    <nav className="navbar" aria-label="Navigazione principale">
      <div className="navbar-toggle" onClick={toggleMenu}> {/* Contenitore cliccabile per aprire/chiudere il menu mobile */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="hamburger-icon"
          role="button"
          aria-label={
            isOpen ? "Chiudi menu di navigazione" : "Apri menu di navigazione"
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg> {/* L’icona hamburger, implementata con SVG, agisce da pulsante e cambia etichetta ARIA in base allo stato isOpen */}
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}> {/* Contenitore dei link di navigazione, con classe dinamica per mostrarli o nasconderli su mobile */}
        <NavLink
          to="/"
          aria-label="Vai a Home"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Home
        </NavLink> {/* Per ogni Navlink, crea un link verso una pagina con: to (destinazione), aria-label (accessibilità), className (aggiunge la classe active se la route è attiva) e onClick={closeMenu} (chiude il menu su mobile) */}
        <NavLink
          to="/about"
          aria-label="Vai a About"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/my-posts"
          aria-label="Vai a I Miei Post"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          I Miei Post
        </NavLink>
        <NavLink
          to="/my-trips"
          aria-label="Vai a I Miei Viaggi"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          I Miei Viaggi
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar; //Esporta il componente