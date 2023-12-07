
import React from "react"
import './App.css'
import Router1 from "./Router/Router1";
import Provider from "../src/Context/Provider"

  
function App() {

  return (
    <>
  <Provider>
        <Router1/>
  </Provider>

    </>

  );
}

export default App;
