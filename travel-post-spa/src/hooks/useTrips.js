/**Creazione di un custom hook useTrips che si interfaccia con lo slice tripsSlice e con i componenti che utilizzano tripsSlice */
import { useSelector } from "react-redux"; //Importa l’hook useSelector da React Redux, che consente a un componente o hook custom di accedere allo stato globale Redux

const useTrips = (tripID = null) => { ////useTrips è una funzione che prende in input un parametro opzionale tripID (che infatti di default è null)
  const trips = useSelector((state) => state.trips.value); //accede allo stato Redux da cui recupera l’array dei viaggi e lo memorizza nella costante trips

  if (tripID) { //se tripID non è null, cioè se è stato passato un ID...
    return trips.find((trip) => trip.id == tripID.toString()); //...cerca all'interno dell'array trips il viaggio con id = tripID e lo ritorna
  }

  return trips; //...altrimenti, se tripID è null, ritorna l'intero array trips
};

export default useTrips; //Esporta il custom hook per poterlo usare nei componenti dell'applicazione