import React from "react"; //Importa React
import { useNavigate } from "react-router-dom"; //Importa l’hook useNavigate per poter effettuare navigazioni programmatiche (es. dopo il submit)
import { useDispatch } from "react-redux"; //Importa useDispatch per inviare azioni allo store Redux
import { addPost } from "../redux/postsSlice"; //Importa l’azione addPost definita nello slice Redux postsSlice
import useForm from "../hooks/useForm"; //Importa il custom hook useForm
import usePosts from "../hooks/usePosts"; //Importa il custom hook usePosts
import "../styles/Form.css"; //Importa il foglio di stile

function PostForm() { //Definisce il componente funzionale PostForm (il form per aggiungere un nuovo post)
  const navigate = useNavigate(); //Inizializzazione di useNavigate
  const posts = usePosts(); //Inizializzazione di usePosts
  const dispatch = useDispatch(); //Inizializzazione di useDispatch

  const onSubmit = (formData) => { 
    dispatch(addPost(formData));
    navigate("/my-posts");
  }; //Funzione di callback (viene chiamata da handleInputChange - vedi useForm.js) che gestisce l'invio di questo specifico form: invia formData tramite redux e reindirizza l'utente alla pagina my-posts

  const { formData, handleInputChange, handleSubmit, resetForm } = useForm(
    {
      id: posts.length > 0 ? Math.max(...posts.map((post) => post.id)) + 1 : 1, //Calcola l'id del nuovo post: il più alto tra quelli esistenti + 1, oppure 1 se non ce ne sono
      date: "",
      title: "",
      subtitle: "",
      content: "",
    },
    onSubmit
  ); //Uso di useForm da cui estraiamo le funzioni e gli passiamo lo stato iniziale del form e la funzione di callback onSubmit definita sopra

  /* Renderizzazione del componente */
  return (
    <div className="container-center">
      <div className="boxed boxed-narrow">
        <form onSubmit={handleSubmit}> {/* Qui gestiamo l'invio del form */}
          <h2 className="form-title">Nuovo Post</h2>

          <label className="form-label" htmlFor="date">Data</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange} //Qui viene gestito il cambiamento del campo input
            required
          />

          <label className="form-label" htmlFor="title">Titolo</label>
          <input
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInputChange} //Qui viene gestito il cambiamento del campo input
            required
          />

          <label className="form-label" htmlFor="subtitle">Sottotitolo</label>
          <input
            name="subtitle"
            id="subtitle"
            value={formData.subtitle}
            onChange={handleInputChange} //Qui viene gestito il cambiamento del campo input
            required
          />

          <label className="form-label" htmlFor="content">Contenuto</label>
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleInputChange} //Qui viene gestito il cambiamento del campo input
            required
          />

          <div className="form-buttons">
            <button type="submit" aria-label="Aggiungi il post">Aggiungi</button>
            <button type="button" aria-label="Resetta il form" onClick={resetForm}> {/* Qui viene gestito il reset del form */}
              Reset
            </button>
          </div>
        </form>
      </div>
      <button className="back-button" aria-label="Torna alla lista dei post salvati" onClick={() => navigate(-1)}> {/* Ritorno indietro nella cronologia di navigazione con useNavigate */}
        Torna a I Miei Post
      </button>
    </div>
  );
}

export default PostForm; //Esporta il componente per l’uso nella route /my-posts/post-form