import "../styles/Home.css"; //Importa il foglio di stile

function Home() { //Definisce il componente funzionale Home (la pagina iniziale dell'applicazione)
  /* Renderizzazione del componente */
  return (
    <div className="container-center home-wrapper">
      <h1 className="home-title">Benvenuto nella Home</h1>
        <p className="home-paragraph">
          Questa è la pagina principale dell'applicazione.
        </p>
      <div className="boxed boxed-narrow">
        

        <div className="home-description">
          <h2 className="home-description-title">Cos'è quest'applicazione?</h2>
          <p className="home-description-paragraph">
            Quest'applicazione React è una{" "}
            <strong>SPA che gestisce Post e Viaggi</strong> con funzionalità
            CRUD (Create, Read, Update, Delete) integrate, costruito con React
            Router, Redux e un'organizzazione a componenti modulari.
          </p>
          <h3 className="home-description-subtitle">
            Funzionalità principali:
          </h3>
          <ul className="home-description-list">
            <li>
              <strong>Gestione Post (CRUD):</strong> Creazione, visualizzazione,
              modifica ed eliminazione di post.
            </li>
            <li>
              <strong>Gestione Viaggi (CRUD):</strong> Creazione e
              visualizzazione di viaggi con dettagli.
            </li>
            <li>
              <strong>Navigazione e Routing:</strong> Esperienza fluida con
              React Router.
            </li>
            <li>
              <strong>Stato Globale con Redux:</strong> Gestione centralizzata
              dei dati.
            </li>
            <li>
              <strong>Componenti Personalizzati:</strong> Navbar, Card, Form per
              contenuti dinamici.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home; //Esporta il componente