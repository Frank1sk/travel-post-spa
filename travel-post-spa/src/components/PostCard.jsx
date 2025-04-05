import "../styles/Card.css"; //Importa il foglio di stile

function PostCard({ title, subtitle }) { //Definisce il componente funzionale PostCard che riceve i prop title (titolo del post) e subtitle (anteprima/descrizione del post)
  /* Renderizzazione del componente */
  return ( //Una card
    <div className="boxed zoom">
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{subtitle}</p>
    </div>
  );
}

export default PostCard; //Esporta PostCard come componente riutilizzabile (nella griglia di MyPosts)