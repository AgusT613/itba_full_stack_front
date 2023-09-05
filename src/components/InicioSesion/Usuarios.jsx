//Importo
import Registrar from "./usuarios/registrar";
import React, { useState, useEffect } from "react";
import IniciarSesion from "./usuarios/iniciarSesion";
import Header from "./Header";
import Enlace from './Enlace'
//funcion general
export default function Usuarios({ setUsuario }) {
  
  return (
    <>
      {/* Traigo el header */}
      <Header />
      {/* registrarse */}
      <div className="registrarPadre">
        {/* Registrarse con las variable de las funciones */}
        <Registrar
          setUsuario={setUsuario}
        />
      </div>

      <div hidden className="iniciarSesionPadre">
        {/* Iniciar sesión con las variable de las funciones */}
        <IniciarSesion
         setUsuario={setUsuario}
        />
      </div>
      {/* Enlace de registro/inicio de sesión */}
      <div className="divEnlace">
        <Enlace/>
      </div>
    </>
  );
}
