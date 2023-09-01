import "./App.css";
import { Bienvenida } from "./components/Bienvenida/Bienvenida";
import { Homebanking } from "./components/Homebanking/Homebanking";
import Usuarios from "./components/InicioSesion/Usuarios.jsx";
import React, { useState, useEffect } from "react";
const App = () => {
  const [usuario, setUsuario] = useState(false);
  return (
    <>
      {usuario ? (
        <>
          <Bienvenida />
          <Homebanking />
        </>
      ) : (
        <div className="usuario"><Usuarios setUsuario={setUsuario} /></div>
      )}
    </>
  );
};
export default App;
