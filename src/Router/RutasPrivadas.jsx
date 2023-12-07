import React  from 'react'
import Contexto from '../Context/Contexto'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

const RutasPrivadas= ({children}) => {
    const {estado}=useContext(Contexto)
  return (estado)
    ? children
    : <Navigate to="/login"/>    
    
  }

export default RutasPrivadas