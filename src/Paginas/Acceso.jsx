import MessageWelcome from "./MessageWelcome"
import FormLogin from "./FormLogin"
import { useState } from 'react'


const Acceso = () =>  {
  const [user, setUser] = useState([])
  
  return (
    <>
    <h1>Inicio de Sesion</h1>    
   
    <div className='App'>
       {
        !user.length > 0
        ? <FormLogin setUser={setUser}/>
        : <MessageWelcome user={user} setUser={setUser}/> 
       }
    
    </div>

    </>
  )
}

export default Acceso