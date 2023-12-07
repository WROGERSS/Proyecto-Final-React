import React from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../Context/Contexto";
import { useContext } from "react";
import Home from "../VarLocal/Home"
import image1 from "../assets/Images/home.jpg";
import "./login.css"


const Login = () => {

  const { logearme } = useContext(Contexto);
  const navegacion = useNavigate();

  const Registrarse = () => {
  navegacion("/", { replace: true });
  logearme("jab");     //valor de LOCALSTORAGE//
};

   
  return (
    <>
     <h1>Pagina de Ingreso</h1>  
     
     <hr></hr>
      <div className="validacion" >
            <div>
            <img src={image1} alt="a wallpaper" className="imghome" />
            </div>
            <hr></hr>
          <div>
            <button onClick={Registrarse}  className="btn btn-info">Acceder</button>
          </div>
          
      </div>    
    </>
  )
}

export default Login