import React from "react"; //Importa React
import { useNavigate } from "react-router-dom"; //Importa useNavigate
import { useDispatch } from "react-redux"; //Importa useDispatch
import { addTrip } from "../redux/tripsSlice"; //Importa addTrip
import useForm from "../hooks/useForm"; //Importa il custom hook useForm
import useTrips from "../hooks/useTrips"; //Importa il custom hook useTrips
import "../styles/Form.css"; //Importa il foglio di stiel

function TripForm() { //Definisce il componente funzionale TripForm (il form per aggiungere un nuovo viaggio)
  const navigate = useNavigate(); //Inizializza useNavigate
  const trips = useTrips(); //Inizializza useTrips
  const dispatch = useDispatch(); //Inizializza useDispatch

  const onSubmit = (formData) => {
    dispatch(addTrip(formData));
    navigate("/my-trips");
  }; //Funzione di callback (viene chiamata da handleInputChange - vedi useForm.js) che gestisce l'invio di questo specifico form: invia formData tramite redux e reindirizza l'utente alla pagina my-trips

  const { formData, handleInputChange, handleSubmit, resetForm } = useForm(
    {
      id: trips.length > 0 ? Math.max(...trips.map((trip) => trip.id)) + 1 : 1, //Calcola l'id del nuovo post: il più alto tra quelli esistenti + 1, oppure 1 se non ce ne sono
      title: "",
      country: "",
      imgURL: "",
      description: "",
      isVisited: false,
    },
    onSubmit
  ); //Uso di useForm da cui estraiamo le funzioni e gli passiamo lo stato iniziale del form e la funzione di callback onSubmit definita sopra

  /* Renderizzazione del componente */
  return (
    <div className="container-center">
      <div className="boxed boxed-narrow">
        <form onSubmit={handleSubmit}> {/* Qui gestiamo l'invio del form */}
          <h2 className="form-title">Nuovo Viaggio</h2>

          <label className="form-label" htmlFor="title">Nome</label>
          <input
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInputChange} //Qui viene gestito il cambiamento del campo input
            required
          />

          <label className="form-label" htmlFor="country">Stato</label>
          <input
            name="country"
            id="country"
            value={formData.country}
            onChange={handleInputChange} //Qui viene gestito il cambiamento del campo input
            required
          />

          <label className="form-label" htmlFor="imgURL">URL Immagine</label>
          <input
            name="imgURL"
            id="imgURL"
            value={formData.imgURL}
            onChange={handleInputChange} //Qui viene gestito il cambiamento del campo input
            required
          />

          <label className="form-label" htmlFor="description">Descrizione</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleInputChange} //Qui viene gestito il cambiamento del campo input
            required
          />

          <label className="form-label" htmlFor="isVisited">
            Visitato
            <input
              type="checkbox"
              name="isVisited"
              id="isVisited"
              checked={formData.isVisited}
              onChange={handleInputChange} //Qui viene gestito il cambiamento del campo input
            />
          </label>

          <div className="form-buttons">
            <button type="submit" aria-label="Aggiungi il viaggio">Aggiungi</button>
            <button type="button" aria-label="Resetta il form" onClick={resetForm}>Reset</button> {/* Qui viene gestito il reset del form */}
          </div>
        </form>
      </div>
      <button className="back-button" aria-label="Torna alla lista dei viaggi salvati" onClick={() => navigate(-1)}>
        Torna a I Miei Viaggi
      </button> {/* Ritorno indietro nella cronologia di navigazione con useNavigate */}
    </div>
  );
}

export default TripForm; //Esporta il componente per l’uso nella route /my-trips/trip-form