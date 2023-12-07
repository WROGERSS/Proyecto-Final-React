import React from "react";
/*import "./acceso.css";*/
import registrado from "../../src/assets/Images/registrado.jpg";



import { useNavigate } from "react-router-dom";
import Contexto from "../Context/Contexto";
import { useContext } from "react";
/*import { useState } from "react";+/

/*CONTEXTO DE VARIABLES LOCALES*/
const { logearme } = useContext(Contexto);
const navegacion = useNavigate();

const login = () => {
  navegacion("/", { replace: true });
  logearme("jab");     //valor de LOCALSTORAGE//
};


function Welcome({ user, setUser }) {
  const handleLogout = () => {
    setUser([]);
  };

  return (
    <>
      <h1>¡Bienvenido/a de nuevo, {user}!</h1>
      <div className="orden">
        <div className="emotivo">
          <img
            alt="emoticon inicio de sesion"
            src={registrado}
            className="emoticon"
          ></img>
        </div>
        <div  className="boton">
          
          <button onClick={login}>Ingresar</button>
          
        </div>
      </div>
    </>
  );
}

export default Welcome;