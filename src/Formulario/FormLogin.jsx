import React from "react";
import "./formlogin.css";
import { useState } from "react";

function FormLogin({ setUser }) {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || contraseña === "") {
      setError(true);
      return;
    }
    setError(false);
    setUser([nombre]);
  };

  return (
    <section>
      <h1>Login</h1>
        <form 
         className='formulario' 
         onSubmit={handleSubmit}
         >
        <input
          type="text"
          placeholder="name"
          aria-label="Username"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <hr/>
        <input
          type="password"
          placeholder="password"
          aria-label="Password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <hr/>
        <button>Iniciar Sesion</button>
      </form>
      <hr></hr>
      {error && <p>Por Favor Digitar Ambos Campos</p>}
    </section>
  );
}

export default FormLogin
