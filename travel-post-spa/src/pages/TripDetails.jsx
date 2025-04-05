import React from "react"; //Importa React
import { useNavigate, useParams } from "react-router-dom"; //Importa: useNavigate (per navigazione programmata) e useParams (per leggere l’id del post dalla rotta)
import useTrips from "../hooks/useTrips"; //Importa useTrips
import "../styles/Details.css"; //Importa il foglio di stile

function TripDetails() { //Definisce il componente funzionale TripDetails
  const { tripID } = useParams(); //Estrae l’ID del viaggio di cui mostrare più dettagli dalla rotta (:tripID)
  const trip = useTrips(tripID); //Usa l’hook per ottenere il viaggio corrispondente a tripID
  const navigate = useNavigate(); //Inizializzazione di useNavigate

  /* Renderizzazione del componente */
  return (
    <div className="container-center">
        <div className="boxed boxed-narrow">
          <img
            src={trip.imgURL}
            alt={`Immagine del viaggio a ${trip.title}`}
            loading="lazy"
            className="details-image"
          />
          <div className="trip-details-content">
            <h1 className="details-title">{trip.title}</h1>
            <p className="details-country">{trip.country}</p>
            <p className="details-content">{trip.description}</p>
            <p className="details-visited">{trip.isVisited ? "✅ Visitata" : "❌ Non visitata"}</p>
          </div>
        </div>
      <button className="back-button" aria-label="Torna alla lista dei viaggi salvati" onClick={() => navigate(-1)}>
        Torna a I Miei Viaggi
      </button> {/* Ritorno indietro nella cronologia di navigazione con useNavigate */}
    </div>
  );
}

export default TripDetails; //Esporta il componente per l’uso nella route /my-trips/:tripID