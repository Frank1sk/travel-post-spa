/**Creazione di un custom hook chiamato useForm.js che gestisce lo stato dei form (TripForm, PostForm e EditPostForm). */
import { useState } from "react"; //Importa l’hook useState di React, necessario per gestire lo stato locale del form

function useForm(initialState, onSubmit) { //Definisce un custom hook chiamato useForm, che altro non è che una funzione che accetta 2 argomenti: initialState (oggetto con i valori iniziali del form) e onSubmit (funzione da chiamare al submit del form).
  const [formData, setFormData] = useState(initialState); //Inizializza lo stato locale del form con i dati iniziali forniti: formData rappresenta i valori correnti dei campi del form e setFormData è la funzione "setter" che può manipolare formData.

  const handleInputChange = (e) => { //Funzione che gestisce il cambiamento di qualsiasi input del form e prende in input l'evento e
    const { name, value, type, checked } = e.target; //Da e.target estrae: name (nome del campo ad esempio title), value (valore digitato), type (tipo di input, ad esempio checkbox), checked (stato booleano del checkbox, se applicabile)
    const inputValue = type === "checkbox" ? checked : value; //Se il campo è un checkbox usa checked, altrimenti value
    setFormData((prevData) => ({ //Aggiorna formData con setFormData modificando solo il campo interessato ([name]) con inputValue e ricopiando gli altri dati con lo spread operator (...prevData)
      ...prevData,
      [name]: inputValue,
    }));
  };

  const resetForm = () => setFormData(initialState); //Resetta il form con setFormData riportando i valori allo stato iniziale

  const handleSubmit = (e) => { //Funzione che gestisce l'invio del form e prende in input e
    e.preventDefault(); //Previene il comportamento di default (refresh della pagina)
    if (onSubmit) { //Se è stata passata una funzione onSubmit...
      onSubmit(formData); //...la esegue passando i dati del form
    }
    resetForm(); //Dopo l'invio, resetta il form
  };

  const updateForm = (newData) => setFormData((prevData) => ({ ...prevData, ...newData })); //Permette di aggiornare esternamente il form con nuovi dati, fondendo quelli esistenti (prevData) con i nuovi (newData) usando lo spread operator

  return { formData, handleInputChange, resetForm, handleSubmit, updateForm }; //Esporta le variabili e funzioni utili che i componenti possono usare
}

export default useForm; //Esporta l’hook useForm per essere importato nei form dell’app