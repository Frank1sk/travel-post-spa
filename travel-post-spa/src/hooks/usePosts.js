/**Creazione di un custom hook usePosts che si interfaccia con lo slice postsSlice e con i componenti che utilizzano postsSlice */
import { useSelector } from "react-redux"; //Importa l’hook useSelector da React Redux, che consente a un componente o hook custom di accedere allo stato globale Redux

const usePosts = (postID = null) => { //usePosts è una funzione che prende in input un parametro opzionale postID (che infatti di default è null)
  const posts = useSelector((state) => state.posts.value); //accede allo stato Redux da cui recupera l’array dei post e lo memorizza nella costante posts

  if (postID) { //se postID non è null, cioè se è stato passato un ID...
    return posts.find((post) => post.id == postID.toString()); //...cerca all'interno dell'array posts il post con id = postID e lo ritorna
  }

  return posts; //...altrimenti, se postID è null, ritorna l'intero array posts
};

export default usePosts; //Esporta il custom hook per poterlo usare nei componenti dell'applicazione