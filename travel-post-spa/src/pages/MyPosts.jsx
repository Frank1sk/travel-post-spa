import { Link } from "react-router-dom"; //Importa il componente Link da React Router per la navigazione client-side
import PostCard from "../components/PostCard"; //Importa PostCard (usato per visualizzare i post in forma compatta)
import usePosts from "../hooks/usePosts"; //Importa il custom hook usePost
import "../styles/MyPosts.css"; //Importa il foglio di stile (che recupera tutti i post dallo store Redux)

function MyPosts() { //Definisce il componente MyPosts (la pagina dedicata all’elenco dei post salvati)
  const posts = usePosts(); //Richiama l’hook usePosts senza argomenti per ottenere l’intero array di post
  /* Renderizzazione del componente */
  return (
    <>
      <div className="myposts-header">
        <div>
          <h1 className="myposts-title">I Miei Post</h1>
          <p className="myposts-paragraph">Visualizza tutti i post salvati.</p>
        </div>
        <Link to="/my-posts/post-form">
          <button>Aggiungi Post</button>
        </Link> {/* Bottone che porta al form per creare un nuovo post (/my-posts/post-form) */}
      </div>
      <div className="myposts-grid"> {/* Inizia una griglia che mostra le anteprime dei post */}
        {posts.map((post) => ( //Itera sull’array posts...
          <Link to={`/my-posts/${post.id}`} key={post.id}> {/* ...ogni PostCard è avvolto da un Link che porta alla pagina di dettaglio del post (/my-posts/${post.id}) */}
            <PostCard
              title={post.title}
              subtitle={post.subtitle}
            ></PostCard> {/* Crea un componente PostCard per ogni post, passando title e subtitle come prop */}
          </Link>
        ))}
      </div>
    </>
  );
}

export default MyPosts; //Esporta il componente per l’uso nella route /my-posts