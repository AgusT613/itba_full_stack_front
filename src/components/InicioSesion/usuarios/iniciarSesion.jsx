//Importo
import React, { useState } from "react";
import estilos from "../usuario.css";

//Función principal con las variables pertinentes
export default function IniciarSesion({ setUsuario }) {
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
  //Función del botón Send en iniciar sesión
  function funcionBoton2(e) {
    //Evito que se refresque la página al hacer click en el botón
    e.preventDefault();
    if (contraseña.length > 0 && email.length > 0) {
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
    } else {
      alert("Complete los campos");
    }
  }
  //Retorno
  return (
    // Formlario para iniciar sesión
    <div className="contenedor2">
      <form
        className="formulario2"
        method="post"
        action="pagina_principal/pagina_principal.html"
      >
        <div className="divTextoInicio">
          <h1 className="textoInicio">Iniciar sesión</h1>
        </div>
        {/* Email */}
        <div className="divEmail2">
          {/* Al escribir en el input, los valores se guardan en useState */}
          <input
            type="email"
            className="email2"
            onChange={(e) => {
              funcionEmail(e);
            }}
            minLength="5"
            required
            placeholder="Email"
          />
        </div>
        <div className="divContraseña2">
          {/* Contraseña */}

          <input
            type="password"
            className="contraseña2"
            onChange={(e) => {
              funcionContraseña(e);
            }}
            minLength="5"
            required
            placeholder="Contraseña"
          />
        </div>
        {/* Al hacer click en el botón, se verifica de la existencia de la cuenta y si la contraseña es correcta o incorrecta */}
        <div className="divBoton2">
          <button
            className="boton2"
            onClick={(e) => {
              funcionBoton2(e);
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
