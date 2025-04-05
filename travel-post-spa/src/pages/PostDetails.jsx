import React from "react"; //Importa React
import { useNavigate, useParams, Link } from "react-router-dom"; //Importa: useNavigate (per navigazione programmata), useParams (per leggere l’id del post dalla rotta), Link (per navigazione client-side con ancoraggio)
import { useDispatch } from "react-redux"; //Importa useDispatch
import { deletePost } from "../redux/postsSlice"; //Importa deletePost dallo slice postsSlice
import usePosts from "../hooks/usePosts"; //Importa usePosts
import "../styles/Details.css"; //Importa il foglio di stile

function PostDetails() { //Definisce il componente funzionale PostDetails
  const { postID } = useParams(); //Estrae l’ID del post di cui mostrare più dettagli dalla rotta (:postID)
  const post = usePosts(postID); //Usa l’hook per ottenere il post corrispondente a postID
  const navigate = useNavigate(); //Inizializzazione di useNavigate
  const dispatch = useDispatch(); //Inizializzazione di useDispatch

  if (!post) {
    return <div>Post non trovato!</div>;
  } ////Se il post con quell’ID non viene trovato, mostra un messaggio all’utente

  const handleDelete = () => {
    dispatch(deletePost(post.id));
    navigate("/my-posts");
  }; //Funzione che invia l'azione deletePost al Redux e reindirizza a my-post

  /* Renderizzazione del componente */
  return (
    <div className="container-center">
        <div className="boxed boxed-narrow">
          <h1 className="details-title">{post.title}</h1>
          <p className="details-date">{post.date}</p>
          <h2 className="details-subtitle">{post.subtitle}</h2>
          <div className="details-content">{post.content}</div>
          <div className="details-buttons">
          <Link to={`/my-posts/edit/${post.id}`}>
            <button aria-label="Modifica il post">Modifica</button>
          </Link> {/* Pulsante che porta alla pagina di modifica del post */}
          <button aria-label="Elimina il post" onClick={handleDelete}> {/* Eliminazione del post */}
            Elimina
          </button>
        </div>
        </div>
      <button className="back-button" aria-label="Torna alla lista dei post salvati" onClick={() => navigate(-1)}> {/* Ritorno indietro nella cronologia di navigazione con useNavigate */}
        Torna a I Miei Post
      </button>
    </div>
  );
}

export default PostDetails; //Esporta il componente per l’uso nella route /my-posts/:postID