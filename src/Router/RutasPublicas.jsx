import React from 'react'
import Contexto from '../Context/Contexto'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

const RutasPublicas= ({children}) => {
    const {estado}=useContext(Contexto)
  return (!estado)
    ? children
    : <Navigate to="/contenido1"/>
    
  }

export default RutasPublicas
