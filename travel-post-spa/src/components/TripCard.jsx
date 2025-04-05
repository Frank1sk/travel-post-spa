import "../styles/Card.css"; //Importa il foglio di stile

function TripCard({ title, imgURL, isVisited }) { //Definisce il componente funzionale TripCard che riceve i prop title (nome del viaggio), imgURL (url dell'immagine) e isVisited (booleano visitato/non visitato)
  /* Renderizzazione del componente */
  return ( //Una Card
    <div className="boxed zoom">
      <img src={imgURL} alt={`Foto di ${title}`} loading="lazy" className="card-image"></img>
        <h2 className="card-title">{title}</h2>
        {isVisited && <span className="card-visited">✅ visitata</span>}
        {!isVisited && <span className="card-visited">❌ non visitata</span>}
      </div>
  );
}

export default TripCard; //Esporta TripCard come componente riutilizzabile (nella griglia di MyTrips)