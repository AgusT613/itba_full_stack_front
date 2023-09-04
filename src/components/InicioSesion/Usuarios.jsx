import { useContext, useState } from 'react'
import { UsuarioContexto } from '../../context/usuarioContexto'
import Registrar from './components/Registrar'
import IniciarSesion from './components/IniciarSesion'
import Header from './components/Header'
import './Usuarios.css'

export function Usuarios () {
  const { setUsuario } = useContext(UsuarioContexto)
  // Cambiar la funcion del formulario (Registrarse / Iniciar Sesion)
  const [enlace, setEnlace] = useState(true)
  function funcionEnlace () {
    if (enlace) {
      // Si estando en registro apretamos iniciar sesión, cambia la interfaz para permitir iniciar sesion
      setEnlace(false)
      document.querySelector('.registrarPadre').setAttribute('hidden', true)
      document.querySelector('.iniciarSesionPadre').removeAttribute('hidden')
      document.querySelector('.enlace').textContent = 'Registrarse'
    } else {
      setEnlace(true)
      document.querySelector('.registrarPadre').removeAttribute('hidden')
      document.querySelector('.iniciarSesionPadre').setAttribute('hidden', true)
      document.querySelector('.enlace').textContent = 'Iniciar Sesión'
    }
  }
  // Obtener el valor del input nombre (en registro solamente) y guardandolo con useState
  const [nombre, setNombre] = useState('')
  const funcionNombre = e => setNombre(e.target.value)
  // obtener el valor del input email (en registro e iniciar sesión) y guardandolo con useState
  const [email, setEmail] = useState('')
  const funcionEmail = e => setEmail(e.target.value)
  // obtener el valor del input contraseña (en registro e iniciar sesión) y guardandolo con useState
  const [contrasenia, setContrasenia] = useState('')
  const funcionContrasenia = e => setContrasenia(e.target.value)

  // Función del boton "send" en "registrar"
  function funcionBoton (e) {
    e.preventDefault()
    setUsuario(false)
    const datos = { email, contrasenia }
    // Si al buscar el mail puesto en el input mail, éste existe en localStorage, imprime un mensaje de aviso
    if (localStorage.getItem(`${datos.email}`)) {
      alert('Cuenta en uso')
    } else {
      localStorage.setItem(datos.email, JSON.stringify(datos))
      setUsuario(true)
    }

    document.querySelector('.nombre').value = ''
    document.querySelector('.email').value = ''
    document.querySelector('.contraseña').value = ''
  }

  // Función del botón "send" en "iniciar sesión"
  function funcionBoton2 (e) {
    e.preventDefault()
    setUsuario(false)
    const datos = { email, contrasenia }
    if (
      localStorage.getItem(`${datos.email}`) &&
      JSON.parse(localStorage.getItem(datos.email)).contrasenia != datos.contrasenia
    ) {
      // Si se encuentra el mail en localStorage pero la contraseña no concuerda con la puesta en localStorage aviso que la contraseña es incorrecta
      alert('Contraseña incorrecta')
    } else if (
      localStorage.getItem(`${datos.email}`) &&
      JSON.parse(localStorage.getItem(datos.email)).contrasenia == datos.contrasenia
    ) {
      setUsuario(true)
    } else if (!localStorage.getItem(`${datos.email}`)) {
      // Si no se encuentra el correo en localStorage aviso que no existe la cuenta
      alert('No existe la cuenta')
    }

    document.querySelector('.email2').value = ''
    document.querySelector('.contraseña2').value = ''
  }

  return (
    <div className='usuario'>
      <Header />
      {/* registrarse */}
      <div className='registrarPadre'>
        {/* Registrarse con las variable de las funciones */}
        <Registrar
          funcionNombre={funcionNombre}
          funcionEmail={funcionEmail}
          funcionContraseña={funcionContrasenia}
          funcionBoton={funcionBoton}
        />
      </div>

      <div hidden className='iniciarSesionPadre'>
        {/* Iniciar sesión con las variable de las funciones */}
        <IniciarSesion
          funcionEmail={funcionEmail}
          funcionContraseña={funcionContrasenia}
          funcionBoton2={funcionBoton2}
        />
      </div>
      {/* Enlace de registro/inicio de sesión */}
      <div className='divEnlace'>
        {/* Al hacer click en el enlace, usamos la función:funcionEnlace() */}
        <a
          href='#'
          className='enlace'
          onClick={() => { funcionEnlace() }}
        >
          Iniciar Sesión
        </a>
      </div>
    </div>
  )
}
