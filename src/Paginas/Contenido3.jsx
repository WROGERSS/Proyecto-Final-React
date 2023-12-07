import React from "react";
import ViewCard from "./ViewCard";
import "./designcards.css"

import image1 from "../assets/Images/themarvels.jpg";
import image2 from "../assets/Images/guardiansofthegalaxy.jpg";
import image3 from "../assets/Images/blackpanther.jpg";
import image4 from "../assets/Images/antman.jpg";
import image5 from "../assets/Images/doctorstrangers.jpg";
import image6 from "../assets/Images/thor.jpg";

const cards = [
  {
    id: 1,
    title: "The Marvels",
    image: image1,
    url: "https://www.marvel.com/movies/the-marvels",
    details: "Carol Danvers, También conocida como Capitana Marvel, ha reclamado su identidad del tiránico Kree y se ha vengado de la Inteligencia Suprema. Pero las consecuencias no deseadas hacen que Carol cargue con la carga de un universo desestabilizado."
  },
  {
    id: 2,
    title: "Guardians of the Galaxy",
    image: image2,
    url: "https://www.marvel.com/movies/guardians-of-the-galaxy-volume-3",
    details:"En Marvel Studios Guardianes de la Galaxia Vol. 3, nuestra querida banda de inadaptados se ve un poco diferente estos días.Peter Quill, todavía recuperándose de la pérdida de Gamora, debe reunir a su equipo a su alrededor para defender el universo y proteger a uno de los suyos"
   
   },
  {
    id: 3,
    title: "Black Panther - Wakanda",
    image: image3,
    url: "https://www.marvel.com/movies/black-panther-wakanda-forever",
    details:"La reina Ramonda (Angela Bassett), Shuri (Letitia Wright), M'Baku (Winston Duke), Okoye (Danai Gurira) y Dora Milaje (incluida Florence Kasumba), luchan para proteger a su nación de las potencias mundiales intervencionistas tras el paso del Rey. La muerte de T'Challa. Mientras los habitantes de Wakanda se esfuerzan por afrontar su próximo capítulo." 
  },
  {
    id: 4,
    title: "Ant-Man",
    image: image4,
    url: "https://www.marvel.com/movies/ant-man-and-the-wasp-quantumania",
    details: "En la película, que inicia oficialmente la fase 5 del Universo Cinematográfico de Marvel, los socios de superhéroes Scott Lang y Hope Van Dyne regresan para continuar sus aventuras como Ant-Man y Wasp."
  }, 
  {
    id: 5,
    title: "Dr. Strangers",
    image: image5,
    url: "https://www.marvel.com/movies/doctor-strange-in-the-multiverse-of-madness",
    details: "un emocionante viaje a través del Multiverso con Doctor Strange, su amigo de confianza Wong y Wanda Maximoff, también conocida como Scarlet Witch."
  },
    {
    id: 6,
    title: "Thor",
    image: image6,
    url: "https://www.marvel.com/movies/thor-love-and-thunder",
    details: "Thor: Love and Thunder de Marvel Studios encuentra al Dios del Trueno en un viaje diferente a todo lo que jamás haya enfrentado: uno de autodescubrimiento. Pero sus esfuerzos son interrumpidos por un asesino galáctico conocido como Gorr el Dios Carnicero, que busca la extinción de los dioses. "
  } 

];

function Contenido3() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, details, id }) => (
          <div className="col-md-4" key={id}>
            <ViewCard imageSource={image} title={title} url={url} details={details} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contenido3