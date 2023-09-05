import React,{useState} from "react";
export default function Enlace() {
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
  return (
    <>
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
    </>
  );
}
