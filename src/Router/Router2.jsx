import { Routes, Route, Navigate} from "react-router-dom"
import React from 'react'
import Contenido1 from "../Paginas/Contenido1"
import Contenido2 from "../Paginas/Contenido2"
import Contenido3 from "../Paginas/Contenido3"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


const Router2 = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="contenido1" element={<Contenido1/>}/>
        <Route path="contenido2" element={<Contenido2/>}/>
        <Route path="contenido3" element={<Contenido3/>}/>
        <Route path="/" element={<Navigate to="contenido1"/>}/>

      </Routes>
      <Footer />
    </>
  )
}

export default Router2;
