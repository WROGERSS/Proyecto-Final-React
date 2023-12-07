import React, { useEffect, useState } from 'react'

const Profile = () => {

    const [nombre, setNombre] = useState('')

    const getData = () => {
        return localStorage.getItem('nombre')
    }

    useEffect(() => {
        setNombre(getData())
    }, [])

    return (
        <>
            <h2>Bienvenido {nombre}</h2>
        </>
    )
}

export default Profile
