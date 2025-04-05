import React from "react"; //Importa la libreria React
import ReactDOM from "react-dom/client"; //Importa la libreria ReactDOM (react-dom/client è necessario per usare createRoot)
import { RouterProvider, createBrowserRouter } from "react-router-dom"; //Importa createBrowserRouter (per definire la struttura delle rotte) e RouterProvider (per fornire il router all'app)
import { Provider } from "react-redux"; //Importa Provider per collegare Redux a React
import { store } from "./redux/store"; //Importa lo store globale definito in store.js
import App from "./App"; //Importa App che è il componente principale dell'applicazione (layout + outlet delle rotte)
import Home from "./pages/Home"; //Importa tutte le pagine usate nella navigazione
import About from "./pages/About";
import MyPosts from "./pages/MyPosts";
import PostDetails from "./pages/PostDetails";
import PostForm from "./pages/PostForm";
import EditPostForm from "./pages/EditPostForm";
import MyTrips from "./pages/MyTrips";
import TripDetails from "./pages/TripDetails";
import TripForm from "./pages/TripForm";
import NotFound from "./pages/NotFound";
import "./styles/index.css"; //Importa gli stili globali definiti in index.css

/**Definizione delle rotte */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //App è il layout principale che ospita tutte le route figlie
    errorElement: <NotFound />, //NotFound viene mostrato per qualsiasi rotta non trovata (qualsiasi rotta non definita qui)
    children: [ //Rotte figlie (navigate dentro App): Ogni path è associato a un componente e i :param (es. :postID, :tripID) sono dinamici e servono per accedere a dettagli/modifica specifici
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/my-posts", element: <MyPosts /> },
      { path: "/my-posts/:postID", element: <PostDetails /> },
      { path: "/my-posts/post-form", element: <PostForm /> },
      { path: "/my-posts/edit/:postID", element: <EditPostForm />},
      { path: "/my-trips", element: <MyTrips /> },
      { path: "/my-trips/:tripID", element: <TripDetails /> },
      { path: "/my-trips/trip-form", element: <TripForm /> },
    ],
  },
]);

/**Renderizzazione dell'app */
ReactDOM.createRoot(document.getElementById("root")).render( //Crea il "root" virtuale e lo collega al div #root presente in index.html
  <React.StrictMode> {/* Modalità stretta di React per segnalare problemi e pratiche sconsigliate durante lo sviluppo */}
    <Provider store={store}> {/* Fornisce lo store Redux a tutta l’app tramite il contesto React */}
      <RouterProvider router={router} /> {/* Attiva la gestione delle rotte usando il router precedentemente definito */}
    </Provider>
  </React.StrictMode>
);