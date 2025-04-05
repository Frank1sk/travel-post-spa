import { Link } from "react-router-dom"; //Importa il componente Link da React Router per permettere la navigazione client-side tra le pagine
import TripCard from "../components/TripCard"; //Importa il componente TripCard, che verrà usato per rappresentare visivamente ogni viaggio
import useTrips from "../hooks/useTrips"; //Importa l’hook custom useTrips, che restituisce l'elenco dei viaggi dallo store Redux
import "../styles/MyTrips.css"; //Importa il foglio di stile

function MyTrips() { //Definisce il componente funzionale MyTrips (la pagina dedicata all’elenco dei viaggi salvati)
  const trips = useTrips(); //Chiama l’hook useTrips() per ottenere l'array dei viaggi salvati nello store

  /* Renderizzazione del componente */
  return (
    <>
      <div className="mytrips-header">
        <div>
          <h1 className="mytrips-title">I Miei Viaggi</h1>
          <p className="mytrips-paragraph">Visualizza tutti i viaggi salvati.</p>
        </div>
        <Link to="/my-trips/trip-form">
          <button>Aggiungi Viaggio</button>
        </Link> {/* Il pulsante apre il form per l’inserimento di un nuovo viaggio */}
      </div>
      <div className="mytrips-grid"> {/* Inizia una griglia (.mytrips-grid */}
        {trips.map((trip) => ( //itera sull’array trips: per ogni viaggio...
          <Link to={`/my-trips/${trip.id}`} key={trip.id}> {/* ...crea un Link alla pagina di dettaglio... */}
            <TripCard
              title={trip.title}
              isVisited={trip.isVisited}
              imgURL={trip.imgURL}
            ></TripCard> {/* ...passa le props necessarie a TripCard: title, isVisited, imgURL */}
          </Link>
        ))}
      </div>
    </>
  );
}

export default MyTrips; //Esporta il componente MyTrips, che verrà usato nella route /my-trips