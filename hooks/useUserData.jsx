import { useEffect, useState } from 'react'

export default function useUserData(initialState) {
  const [datosUsuario, setDatosUsuario] = useState(initialState)

  useEffect(() => {
    const userId = window.localStorage.getItem('user_id')
    if (userId) {
      const username = window.localStorage.getItem('username')
      const password = window.localStorage.getItem('password')
      setDatosUsuario({ userId, username, password })
    }
  }, [])

  return { datosUsuario, setDatosUsuario }
}
