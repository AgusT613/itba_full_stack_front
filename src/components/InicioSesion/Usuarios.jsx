//Importo
import Registrar from "./usuarios/registrar";
import React, { useState, useEffect } from "react";
import IniciarSesion from "./usuarios/iniciarSesion";
import Header from "./Header";
//funcion general
export default function Usuarios({ setUsuario }) {
  //uso de useState para el enlace iniciar/sesión/registrarse
  const [enlace, setEnlace] = useState(true);
  //Al hacer click en el enlace, cambia los elementos registro/iniciar sesión
  function funcionEnlace() {
    if (enlace) {
      //si estando en registro,apretamos iniciar sesión
      setEnlace(false);
      //Ocultamos el componente registrarse
      document.querySelector(".registrarPadre").setAttribute("hidden", true);
      //Mostramos el componente iniciar sesión
      document.querySelector(".iniciarSesionPadre").removeAttribute("hidden");
      //El enlace ahora dice:Registrarse
      document.querySelector(".enlace").textContent = "Registrarse";
    } else {
      //si entando en iniciar sesión, apretamos registrarse
      setEnlace(true);
      //Mostramos el componente registrarse
      document.querySelector(".registrarPadre").removeAttribute("hidden");
      //Ocultamos el componente iniciar sesión
      document
        .querySelector(".iniciarSesionPadre")
        .setAttribute("hidden", true);
      //El enlace ahora dice:iniciar sesión
      document.querySelector(".enlace").textContent = "Iniciar Sesión";
    }
  }
  //obtener el valor del input nombre(en registro solamente) y guardandolo con useState
  const [nombre, setNombre] = useState("");
  function funcionNombre(e) {
    setNombre(e.target.value);
  }
  //obtener el valor del input email (en registro e iniciar sesión) y guardandolo con useState
  const [email, setEmail] = useState("");
  function funcionEmail(e) {
    setEmail(e.target.value);
  }
  //obtener el valor del input contraseña (en registro e iniciar sesión) y guardandolo con useState
  const [contraseña, setContraseña] = useState("");
  function funcionContraseña(e) {
    setContraseña(e.target.value);
  }
  //Función al presionar el botón send al registrar
  function funcionBoton(e) {
    //Al hacer click no se refresca la página
    e.preventDefault();
    //Valor por defecto hasta que se verifique la cuenta
    setUsuario(false);
    //Guardo los datos obtenido con las funciones de registro en la constante datos como un objeto
    const datos = { Name: nombre, Email: email, Password: contraseña };
    //Si al buscar el mail puesto en el input mail, éste existe en localStorage, dice cuenta en uso
    //Variable para redireccionar a la página principal
    if (localStorage.getItem(`${datos.Email}`)) {
      alert("Cuenta en uso");
    } else {
      //Si el mail ingresado no existe en localStorage, se crea
      //Paso de objeto a string
      // location.href = paginaPrincipal;
      localStorage.setItem(datos.Email, JSON.stringify(datos));
      setUsuario(true);
    }
    //Hago que los valores de los inputs en registrar se 'reinicien'
    document.querySelector(".nombre").value = "";
    document.querySelector(".email").value = "";
    document.querySelector(".contraseña").value = "";
  }
  //Función del botón Send en iniciar sesión
  function funcionBoton2(e) {
    //Evito que se refresque la página al hacer click en el botón
    e.preventDefault();
    //Valor por defecto hasta que se verifique la cuenta
    setUsuario(false);
    //Guardo los datos de los inputs en iniciar sesión en la const datos comoun objeto
    const datos = { Email: email, Password: contraseña };
    //Si se encuentra el mail en localStorage pero la contraseña no concuerda con la puesta en localStorage aviso que la contraseña es incorrecta
    if (
      localStorage.getItem(`${datos.Email}`) &&
      JSON.parse(localStorage.getItem(datos.Email)).Password != datos.Password
    ) {
      alert("Contraseña incorrecta");
      //Si se encuentra el mail en localstorage y concuerda la contraseña=>redirigo a la página
    } else if (
      localStorage.getItem(`${datos.Email}`) &&
      JSON.parse(localStorage.getItem(datos.Email)).Password == datos.Password
    ) {
      //Variable para redireccionar a la página principal
      setUsuario(true);
      //Si no se encuentra el correo en localStorage aviso que no existe la cuenta
    } else if (!localStorage.getItem(`${datos.Email}`)) {
      alert("No existe la cuenta");
    }
    // 'Reinicio' los valores de los inputs de iniciar sesión
    document.querySelector(".email2").value = "";
    document.querySelector(".contraseña2").value = "";
  }
  return (
    <>
      {/* Traigo el header */}
      <Header />
      {/* registrarse */}
      <div className="registrarPadre">
        {/* Registrarse con las variable de las funciones */}
        <Registrar
          funcionNombre={funcionNombre}
          funcionEmail={funcionEmail}
          funcionContraseña={funcionContraseña}
          funcionBoton={funcionBoton}
        />
      </div>

      <div hidden className="iniciarSesionPadre">
        {/* Iniciar sesión con las variable de las funciones */}
        <IniciarSesion
          funcionEmail={funcionEmail}
          funcionContraseña={funcionContraseña}
          funcionBoton2={funcionBoton2}
        />
      </div>
      {/* Enlace de registro/inicio de sesión */}
      <div className="divEnlace">
        {/* Al hacer click en el enlace, usamos la función:funcionEnlace() */}
        <a
          href="#"
          className="enlace"
          onClick={() => {
            funcionEnlace();
          }}
        >
          Iniciar Sesión
        </a>
      </div>
    </>
  );
}
