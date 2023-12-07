import { useEffect, useState } from "react";
import axios from "axios";
import ListCards from "./ListCards";
import "./consultaapi.css"


const ConsultApi = () => {
  const [datos, setDatos] = useState([]);
  const ts = 2;
  const key = "dfcd594e03ef81e63aff56d168977b12";
  const hash = "6a00db839ad9e3311d639c6a0b16032e";

  const categoria = "events";
  const url = `https://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const solicitud = async () => {
      try {
        const response = await axios.get(url);
        setDatos(response.data.data.results);
        /*console.log(datos);*/
        console.log
      } catch (error) {
        console.log("Error detectado API:", error);
      }
    };
    solicitud();
  }, []);

  return (
    <>
      <main className="container">  
        {/* <Tarjetas
      ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/8/60/6553cca0c0c41/detail.jpg"
      titulo="Card title"
      descripcion="Soy una descripcion"
    /> */}
        {datos.map((item) => (
          <ListCards
            key={item.id}
            imagen={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
            titulo={item.title}
            descripcion={item.description}
            ruta="https://www.marvel.com"
          />
        ))}
      </main>
    </>
  );
};
export default ConsultApi;
