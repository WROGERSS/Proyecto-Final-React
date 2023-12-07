import React from 'react'
import types from './types'

const miReducer = (state={},action) => {
  /*
   switch (action.type){
        case types.login:
             return {
               logeado:true,
               usuario:action.payload
             }

        case types.logout:
              return {
               logeado:false,
               usuario:null.payload


              }     
        default:
            return state;    
    
    }

    los valores de las variables logeado y usuario se envian a Provider


  */


    switch (action.type){
        case types.login:
             return {

                estado:true

             }
        case types.logout:
              return {

                estado:false


              }     
        default:
            return state;    
    
    }
}

export default miReducer;
