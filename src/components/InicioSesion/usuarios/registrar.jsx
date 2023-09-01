import React, { useState, useEffect } from "react";
import estilos from "../usuario.css";
//Función principal con los props pertinentes
export default function ElFormulario({
  funcionNombre,
  funcionEmail,
  funcionContraseña,
  funcionBoton,
}) {
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
          <label className="labelNombre" name="name">
            Name
          </label>
          {/* El valor del input se guarda en useState */}
          <input
            type="text"
            className="nombre"
            onChange={(e) => {
              funcionNombre(e);
            }}
          />
        </div>
        <div className="divEmail">
          {/* Email */}
          <label className="labelEmail">Email</label>
          {/* El valor del input se guarda en useState */}
          <input
            type="email"
            className="email"
            onChange={(e) => {
              funcionEmail(e);
            }}
          />
        </div>
        <div className="divContraseña">
          {/* Contraseña */}
          <label className="labelContraseña">Pasword</label>
          {/* El valor del input se guarda en useState */}
          <input
            type="password"
            className="contraseña"
            onChange={(e) => {
              funcionContraseña(e);
            }}
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
