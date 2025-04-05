import React from "react"; //Importa la libreria React
import "../styles/About.css"; //Importa il foglio di stile
import profileImage from "../assets/profile.svg"; //Importa profile.svg

function About() { //Definisce il componente funzionale About (la pagina informativa dell'autore)
  /* Renderizzazione del componente */
  return (
    <div id="about-container">
      <div id="about-header">
        <img src={profileImage} alt="Foto profilo dell'autore della pagina" id="profile-image" />
        <section className="boxed">
          <h1 className="title">About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium.
          </p>
        </section>
      </div>

      <div id="about-content">
        <section className="boxed">
          <h2 className="title">Contatti</h2>
          <ul>
            <li><strong>Indirizzo:</strong> Via Sit Amet 123, Città, Stato</li>
            <li><strong>Telefono:</strong> +39 123 456 7890</li>
            <li><strong>Email:</strong> lorem.ipsum@example.com</li>
          </ul>
        </section>

        <section className="boxed">
          <h2 className="title">Hobby</h2>
          <ul>
            <li>Trekking e Escursioni nella natura</li>
            <li>Lettura di libri (in particolare fantasy e thriller)</li>
            <li>Viaggi e scoperte culturali</li>
            <li>Fotografia paesaggistica</li>
            <li>Suonare la chitarra</li>
            <li>Videogiochi e sviluppo di giochi indie</li>
          </ul>
        </section>

        <section className="boxed">
          <h2 className="title">Social</h2>
          <ul>
            <li><a href="#" aria-label="Profilo LinkedIn dell'autore" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#" aria-label="Profilo GitHub dell'autore" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="#" aria-label="Profilo Instagram dell'autore" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About; //Esporta il componente per poterlo usare nella route /about