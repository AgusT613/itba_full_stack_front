//Importo
import React from "react";
import estilos from "../usuario.css";
//Función principal con las variables pertinentes
export default function IniciarSesion({
  funcionEmail,
  funcionContraseña,
  funcionBoton2,
}) {
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
          <label className="labelEmail2">Email</label>
          {/* Al escribir en el input, los valores se guardan en useState */}
          <input
            type="email"
            className="email2"
            onChange={(e) => {
              funcionEmail(e);
            }}
          />
        </div>
        <div className="divContraseña2">
          {/* Contraseña */}
          <label className="labelContraeña2">Pasword</label>
          <input
            type="password"
            className="contraseña2"
            onChange={(e) => {
              funcionContraseña(e);
            }}
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
