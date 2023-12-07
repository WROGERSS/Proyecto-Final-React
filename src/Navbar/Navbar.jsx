import React from "react" 
import { NavLink, useNavigate } from "react-router-dom";
import Contexto from "../Context/Contexto";
import { useContext } from "react";
import "./navbar.css"

    
const Navbar = () => {
    const navegacion = useNavigate();
    const { deslogearme } = useContext(Contexto);

    const login = () => {
    navegacion('/login', { replace: true });
    deslogearme();
  };

  return (
    <>
      <nav>
        <NavLink to="Contenido1" style={{ textDecoration: "none"}}>Home</NavLink>
        <NavLink to="Contenido2" style={{ textDecoration: "none"}}>Comic's</NavLink>
        <NavLink to="Contenido3" style={{ textDecoration: "none"}}>Movies</NavLink>
        <button onClick={login} className="btn btn-primary">Logout</button>
      </nav>
    </>
  );
};

export default Navbar;
