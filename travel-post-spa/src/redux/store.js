/**Creazione dello store Redux */
import { configureStore } from "@reduxjs/toolkit"; //Importa la funzione configureStore
import { tripsReducer } from "./tripsSlice"; //Importa il reducer definito nello slice tripsSlice che rappresenta lo stato relativo ai viaggi
import { postsReducer } from "./postsSlice"; //Importa il reducer definito nello slice postsSlice che rappresenta lo stato relativo ai post

export const store = configureStore({ //Crea, e contemporaneamente esporta, lo store Redux. Lo store è l'oggetto centrale che contiene tutto lo stato globale dell’applicazione.
  reducer: { 
    trips: tripsReducer,
    posts: postsReducer,
  }, //Associa i reducer allo store
});