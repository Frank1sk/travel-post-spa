/**Creazione di tripsSlice, uno slice dello stato Redux cioè un modulo autonomo con stato, reducer e azioni */
import { createSlice } from "@reduxjs/toolkit"; //Importa la funzione createSlice da Redux Toolkit

export const tripsSlice = createSlice({ // Crea, e contemporaneamente esporta, uno slice Redux chiamato tripsSlice che ha...
  name: "trips", //...un nome (trips), utile per il debug o quando si ispeziona lo stato Redux
  initialState: { //...uno stato iniziale, che è un oggetto...
    value: [ //...con una proprietà value, che contiene un array di oggetti...
      { //...ogni oggetto rappresenta un viaggio con...
        id: 0, //...id...
        title: "Roma", //...Città...
        country: "Italia", //...Stato...
        description: "La capitale dell'Italia", //...descrizione...
        imgURL:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //...un url dell'immagine della città...
        isVisited: true, //...un booleano per distinguere visitata/non visitata...
      },
      {
        id: 1,
        title: "Praga",
        country: "Repubblica Ceca",
        description: "La capitale della Repubblica Ceca",
        imgURL:
          "https://plus.unsplash.com/premium_photo-1700765677436-27172b729bc5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
      },
      {
        id: 2,
        title: "Parigi",
        country: "Francia",
        description: "La capitale della Francia",
        imgURL:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false,
      },
      {
        id: 3,
        title: "Madrid",
        country: "Spagna",
        description: "La capitale della Spagna",
        imgURL:
          "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false,
      },
    ],
  },
  reducers: { //...dei reducers, nello specifico...
    addTrip: (state, action) => { //...addTrip che...
      state.value.push(action.payload);
    }, //...aggiunge un nuovo viaggio all’array value usando il payload ricevuto dall'azione
  },
});

export const { addTrip } = tripsSlice.actions; //Esporta l'azione addTrip da usare nei componenti React
export const tripsReducer = tripsSlice.reducer; //Esporta il reducer per essere combinato nello store Redux