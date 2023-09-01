import Foto from "../../images/logo.jpg";
import React from "react";
export default function Header() {
  return (
    //Creo un header
    <header className="cabecera">
      <figure className="cabecera__contenedor__logoIndex">
        {/* Imagen del logo de itbank */}
        <img id="logoIndex" src={Foto} alt="logo de ITBANK" />
      </figure>
      <h1 className="cabecera__titulo">Homebanking</h1>
    </header>
  );
}
