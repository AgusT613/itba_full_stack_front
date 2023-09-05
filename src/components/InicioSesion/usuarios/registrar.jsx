import React, { useState, useEffect } from "react";
import estilos from "../usuario.css";
//Función principal con los props pertinentes
export default function ElFormulario({ setUsuario }) {
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
    if (nombre.length >= 1 && email.length >= 1 && contraseña.length >= 1) {
      //Valor por defecto hasta que se verifique la cuenta
      setUsuario(false);
      //Guardo los datos obtenido con las funciones de registro en la constante datos como un objeto
      const datos = { Name: nombre, Email: email, Password: contraseña };
      //Si al buscar el mail puesto en el input mail, éste existe en localStorage, dice cuenta en uso
      if (localStorage.getItem(`${datos.Email}`)) {
        alert("Cuenta en uso");
      } else {
        //Si el mail ingresado no existe en localStorage, se crea
        localStorage.setItem(datos.Email, JSON.stringify(datos));
        setUsuario(true);
      }
      //Hago que los valores de los inputs en registrar se 'reinicien'
      document.querySelector(".nombre").value = "";
      document.querySelector(".email").value = "";
      document.querySelector(".contraseña").value = "";
    } else {
      alert("Complete los campos");
    }
  }
  //Retorno el formulario de registro de usuarios
  return (
    <div className="contenedor">
      <form
        className="formulario"
        method="post"
        action="pagina_principal/pagina_principal.html"
      >
        <div className="divTextoRegistro">
          <h1 className="textoRegistro">Registro</h1>
        </div>
        {/*Nombre*/}
        <div className="divNombre">
          {/* El valor del input se guarda en useState */}
          <input
            type="text"
            className="nombre"
            onChange={(e) => {
              funcionNombre(e);
            }}
            placeholder="Nombre"
          />
        </div>
        <div className="divEmail">
          {/* Email */}
          {/* El valor del input se guarda en useState */}
          <input
            type="email"
            className="email"
            onChange={(e) => {
              funcionEmail(e);
            }}
            placeholder="Email"
          />
        </div>
        <div className="divContraseña">
          {/* Contraseña */}
          {/* El valor del input se guarda en useState */}
          <input
            type="password"
            className="contraseña"
            onChange={(e) => {
              funcionContraseña(e);
            }}
            placeholder="Contraseña"
          />
        </div>
        <div className="divBoton">
          <button
            className="boton"
            onClick={(e) => {
              funcionBoton(e);
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
