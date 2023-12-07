import React from "react";
import image1 from "../assets/Images/home.jpg";
import "../Paginas/contenido1.css"

const Home = () => {
  return (
    <>
      <hr></hr>
      <h1>Marvels</h1>
      <hr></hr>  <hr></hr>
       <div className="overflows" >
       <img src={image1} alt="a wallpaper" className="card-imghome-top" />
      </div>
     
    </>
  );
};

export default Home;
