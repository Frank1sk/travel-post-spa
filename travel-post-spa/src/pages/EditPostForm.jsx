import React, { useEffect } from "react"; //Importa React e l’hook useEffect per gestire il ciclo di vita (in questo caso per precompilare il form)
import { useNavigate, useParams } from "react-router-dom"; //Import di useNavigate (per reindirizzare l’utente dopo il submit) e useParams (per leggere il parametro dinamico postID dall'URL)
import { useDispatch } from "react-redux"; //Import di useDispatch
import { updatePost } from "../redux/postsSlice"; //Import di updatePost da postSlice
import useForm from "../hooks/useForm"; //Import di useForm
import usePosts from "../hooks/usePosts"; //Import di usePosts
import "../styles/Form.css"; //Import del foglio di stile

function EditPostForm() { //Definisce il componente funzionale EditPostForm
  const { postID } = useParams(); //Estrae l’ID del post da modificare dalla rotta (:postID)
  const post = usePosts(postID); //Usa l’hook per ottenere il post corrispondente a postID
  const dispatch = useDispatch(); //Inizializzazione di useDispatch
  const navigate = useNavigate(); //Inizializzazione di useNavigate

  const onSubmit = (formData) => {
    dispatch(updatePost({ id: post.id, updatedPost: formData }));
    navigate("/my-posts");
  }; //Funzione di callback (viene chiamata da handleInputChange - vedi useForm.js) che gestisce l'invio di questo specifico form: invia un'azione (updatePost) al Redux con l'id (post.id) e i nuovi dati (formData) e reindirizza l'utente alla pagina my-posts

  const { formData, handleInputChange, handleSubmit, resetForm, updateForm } = useForm(
    {
      date: "",
      title: "",
      subtitle: "",
      content: "",
    },
    onSubmit
  ); ////Uso di useForm da cui estraiamo le funzioni e gli passiamo lo stato iniziale del form e la funzione di callback onSubmit definita sopra

  // Precompilare il form con i dati del post selezionato
  useEffect(() => {
    if (post) {
      updateForm({
        date: post.date,
        title: post.title,
        subtitle: post.subtitle,
        content: post.content,
      });
    }
  }, [post]); //Quando il post è disponibile, aggiorna lo stato del form con i dati esistenti una sola volta (dipendenza [post])

  if (!post) {
    return <div>Post non trovato!</div>;
  } //Se il post con quell’ID non viene trovato, mostra un messaggio all’utente

  /* Renderizzazione del componente */
  return (
    <div className="container-center">
      <div className="boxed boxed-narrow">
        <form onSubmit={handleSubmit}> {/* Invio del form */}
          <h2 className="form-title">Modifica Post</h2>

          <label className="form-label" htmlFor="date">Data</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange} //Modifica di un campo
            required
          />

          <label className="form-label" htmlFor="title">Titolo</label>
          <input
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInputChange} //Modifica di un campo
            required
          />

          <label className="form-label" htmlFor="subtitle">Sottotitolo</label>
          <input
            name="subtitle"
            id="subtitle"
            value={formData.subtitle}
            onChange={handleInputChange} //Modifica di un campo
            required
          />

          <label className="form-label" htmlFor="content">Contenuto</label>
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleInputChange} //Modifica di un campo
            required
          />

          <div className="form-buttons">
            <button type="submit" aria-label="Salva le modifiche al post">Salva</button>
            <button type="button" aria-label="Resetta il form" onClick={resetForm}>Reset</button> {/* Reset del form */}
          </div>
        </form>
      </div>
      <button className="back-button" aria-label="Torna alla lista dei post salvati" onClick={() => navigate("/my-posts")}> {/* Ritorno indietro nella cronologia di navigazione con useNavigate */}
        Torna a I Miei Post
      </button>
    </div>
  );
}

export default EditPostForm; //Esporta il componente per l’uso nella route /my-posts/edit/:postID