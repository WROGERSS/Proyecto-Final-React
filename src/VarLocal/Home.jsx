import React, { useState } from "react";
import Profile from "./Profile";
import "../VarLocal/styles.css";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [savedData, setSavedData] = useState(false);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    console.log(inputText);

    if (text === "") {
      setSavedData(false);
    }
  };

  const saveData = () => {
    localStorage.setItem("nombre", inputText);
    alert("Nombre Guardado");
    setSavedData(true);
  };

  return (
    <>
      <h1></h1>
      <div className="containerhome">
        <div>
          <input
            className="input"
            onChange={handleInputChange}
            placeholder="Ingresa tu Nombre"
          />
        </div>
        <div>
          <button className="button btn  btn-success " onClick={saveData}>
            Guardar
          </button>
          {!!savedData && <Profile />}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Home;
