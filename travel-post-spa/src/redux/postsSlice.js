/**Creazione di postsSlice, uno slice dello stato Redux cioè un modulo autonomo con stato, reducer e azioni */
import { createSlice } from "@reduxjs/toolkit"; //Importa la funzione createSlice da Redux Toolkit

export const postsSlice = createSlice({ // Crea, e contemporaneamente esporta, uno slice Redux chiamato postsSlice che ha...
  name: "posts", //...un nome (posts), utile per il debug o quando si ispeziona lo stato Redux
  initialState: { //...uno stato iniziale, che è un oggetto...
    value: [ //...con una proprietà value, che contiene un array di oggetti...
      { //...ogni oggetto rappresenta un post con...
        id: 0, //...id...
        date: "2025-01-12", //...data...
        title: "Post 1", //...titolo...
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus dui, accumsan finibus dui vitae, egestas lobortis mi. Integer libero magna, maximus sed augue id, mollis vehicula justo. Phasellus consectetur nulla dui, a auctor mi pharetra quis. Suspendisse non bibendum leo.", //...introduzione/anteprima testuale...
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus dui, accumsan finibus dui vitae, egestas lobortis mi. Integer libero magna, maximus sed augue id, mollis vehicula justo. Phasellus consectetur nulla dui, a auctor mi pharetra quis. Suspendisse non bibendum leo. Etiam ac arcu rutrum tortor tempor laoreet a ut quam. Nulla tristique feugiat sem, mattis gravida nisl auctor ut. Duis sollicitudin, arcu id bibendum finibus, diam neque sagittis leo, eget varius felis ligula viverra purus. In diam eros, euismod quis tellus non, porttitor posuere ex. Fusce nec ipsum in nisl dictum tristique hendrerit in eros. Quisque ipsum nibh, maximus sit amet auctor ac, porta nec nunc. Duis libero justo, pretium ut risus vel, lobortis pharetra justo. In lacinia velit leo, ut rutrum turpis cursus eget. Sed ornare, erat in elementum imperdiet, nunc arcu commodo arcu, et dignissim enim elit nec massa. Pellentesque semper felis mi, id pulvinar arcu pellentesque at. Vestibulum nec nulla et ante elementum fringilla ultrices at augue. Donec tincidunt nisi nec velit eleifend, facilisis volutpat enim hendrerit. Praesent in magna vel ligula molestie aliquam ac non justo. Cras lacinia massa in commodo tincidunt. Cras vel est eu arcu eleifend scelerisque sed vitae nibh. Aenean tincidunt, orci in aliquet suscipit, purus mi dictum tortor, eu eleifend velit dui nec eros. In hac habitasse platea dictumst. Sed tincidunt vel purus ut condimentum. Fusce nulla justo, blandit id ligula eget, posuere suscipit dui. Sed urna urna, pretium eget nisl ac, volutpat auctor ipsum. Nullam faucibus molestie elit vel rhoncus. Aliquam tristique ultricies nibh id ultricies. Donec a nunc tempor, semper nunc eget, cursus nisi. Sed tempor egestas ipsum eu scelerisque.", //...contenuto esteso.
      },
      {
        id: 1,
        date: "2025-02-06",
        title: "Post 2",
        subtitle: "Aenean pretium felis in massa dignissim, ut varius sem dapibus. Quisque lorem libero, tincidunt ac faucibus id, ultrices vel elit. In non feugiat neque. Sed ullamcorper accumsan pellentesque. Maecenas ultrices quis massa maximus rhoncus. Aenean tempor magna id suscipit lacinia.",
        content:
          "Aenean pretium felis in massa dignissim, ut varius sem dapibus. Quisque lorem libero, tincidunt ac faucibus id, ultrices vel elit. In non feugiat neque. Sed ullamcorper accumsan pellentesque. Maecenas ultrices quis massa maximus rhoncus. Aenean tempor magna id suscipit lacinia. Etiam ut sollicitudin libero. Phasellus eros felis, blandit vel fermentum vitae, vulputate vitae dui. Cras finibus tellus eros, id scelerisque est consectetur id. Sed tincidunt nisi nec gravida placerat. Praesent et nulla id orci tincidunt interdum. Suspendisse posuere augue sapien, non dapibus est euismod eu. Nunc rutrum ligula massa. Aenean et ligula lectus. In hac habitasse platea dictumst. Mauris tristique odio vel faucibus convallis. Mauris laoreet mauris eget luctus semper. Sed mattis elit vitae posuere accumsan. Donec vulputate mattis nibh eu varius. Phasellus condimentum metus id auctor efficitur. Aenean at blandit urna. Sed a sollicitudin est, sed volutpat erat. Donec eu metus mollis, efficitur diam eu, consequat nisi. Nulla cursus diam id est maximus volutpat. Donec viverra nunc et lorem varius tincidunt.",
      },
      {
        id: 2,
        date: "2025-03-21",
        title: "Post 3",
        subtitle: "Cras in nisi pharetra nunc aliquam feugiat non id ante. Pellentesque quis tincidunt dui. Nam mattis eu quam vel mollis. Proin vel dignissim velit. Maecenas gravida, ex eu posuere auctor, ante ex facilisis quam, dictum vehicula odio nibh vitae elit. Ut sollicitudin sem eget ultricies convallis.",
        content:
          "Cras in nisi pharetra nunc aliquam feugiat non id ante. Pellentesque quis tincidunt dui. Nam mattis eu quam vel mollis. Proin vel dignissim velit. Maecenas gravida, ex eu posuere auctor, ante ex facilisis quam, dictum vehicula odio nibh vitae elit. Ut sollicitudin sem eget ultricies convallis. Praesent in justo consectetur, gravida dui sit amet, rhoncus dolor. Maecenas dictum lacinia laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, erat sit amet lacinia lobortis, diam diam suscipit nulla, et ullamcorper diam ex vel ipsum. Vivamus orci turpis, fringilla vel ullamcorper at, posuere ut justo. Proin non tristique nunc. Morbi convallis purus nisi, eu vestibulum sapien fermentum quis. Cras semper maximus blandit. Donec hendrerit, nunc eget maximus elementum, odio velit blandit metus, nec hendrerit velit odio a nisl. Integer ligula sapien, feugiat non cursus at, consequat id ex. Nunc ullamcorper, odio sed gravida rutrum, eros leo sagittis erat, volutpat mattis sapien leo ut eros. Ut sapien lorem, suscipit gravida magna a, feugiat ultrices quam. Phasellus iaculis congue lectus, quis pretium nibh eleifend eget. Aliquam ac condimentum tellus. In eget purus sit amet tellus rutrum aliquet vel sit amet dolor. Nam ornare nunc mollis tortor consequat, at molestie ligula sollicitudin. Vestibulum lacinia varius nunc, a elementum nisi sagittis ut. Quisque iaculis bibendum ex, vitae placerat nisl molestie sed. Fusce vel lacus risus. Integer convallis, odio eget porta pellentesque, nulla magna vulputate diam, in volutpat quam urna vitae mauris.",
      },
      {
        id: 3,
        date: "2025-04-30",
        title: "Post 4",
        subtitle: "Etiam lacus risus, luctus vel odio id, tempus viverra turpis. Donec nec vehicula lectus. Sed iaculis libero purus. Etiam vel lacus eget enim convallis consectetur id in ipsum. Etiam et turpis sit amet erat dictum feugiat. Pellentesque et dui magna. Nam a magna sagittis, eleifend justo ut, tincidunt purus.",
        content:
          "Etiam lacus risus, luctus vel odio id, tempus viverra turpis. Donec nec vehicula lectus. Sed iaculis libero purus. Etiam vel lacus eget enim convallis consectetur id in ipsum. Etiam et turpis sit amet erat dictum feugiat. Pellentesque et dui magna. Nam a magna sagittis, eleifend justo ut, tincidunt purus. Donec lorem eros, hendrerit non consequat ac, tincidunt sit amet orci. Nullam placerat tortor nec ipsum vestibulum interdum. Sed blandit purus turpis, nec viverra felis imperdiet at. Morbi pellentesque nisi lacus, eget tristique tellus efficitur eget. In condimentum odio nec lorem pulvinar, nec consequat leo ullamcorper. Aenean lorem arcu, sodales in laoreet at, lobortis eu diam. Suspendisse elit turpis, egestas ut arcu nec, vulputate lacinia nibh. Donec id libero sapien. Duis sapien purus, suscipit at dolor nec, elementum euismod ipsum. Nunc suscipit vitae mauris eu placerat. Fusce posuere magna quis elit laoreet, malesuada porta ante dictum. Duis venenatis ex non magna volutpat dapibus. Vivamus at neque ac eros maximus placerat eu in elit. Pellentesque id nibh est. Ut quis arcu pellentesque dolor aliquam cursus sit amet fringilla mauris. Morbi vitae placerat elit. Curabitur sodales nec arcu pharetra dignissim. Nulla sollicitudin mollis augue, vitae pretium ipsum commodo vitae. Phasellus posuere, ex eget consequat laoreet, sapien libero ullamcorper nibh, vitae laoreet diam diam a tortor. In ultricies ex vel purus varius, eu placerat nibh dapibus. Nam luctus arcu ut bibendum feugiat.",
      },
    ],
  },
  reducers: { //...dei reducers, nello specifico...
    addPost: (state, action) => { //...addPost che...
      state.value.push(action.payload);
    }, //...aggiunge un nuovo post all'array value usando il payload ricevuto dall'azione...
    updatePost: (state, action) => { //...updatePost che...
      const { id, updatedPost } = action.payload; //...estrae l’id del post da aggiornare e i dati modificati...
      const index = state.value.findIndex((post) => post.id === id); //...Cerca l’indice del post con quell’id nell’array value...
      if (index !== -1) { //...se lo trova, sostituisce il contenuto esistente con una nuova versione aggiornata e usa lo spread operator per fondere il vecchio oggetto (state.value[index]) con le modifiche (updatedPost)...
        state.value[index] = { ...state.value[index], ...updatedPost };
      }
    },
    deletePost: (state, action) => { //...deletePost che...
      state.value = state.value.filter((post) => post.id !== action.payload);
    }, //...rimuove dall’array il post il cui id è uguale al payload dell’azione.
  },
});

export const { addPost, updatePost, deletePost } = postsSlice.actions; //Esporta le azioni (addPost, updatePost, deletePost) da usare nei componenti React
export const postsReducer = postsSlice.reducer; //Esporta il reducer per essere combinato nello store Redux