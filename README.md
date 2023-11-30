# 🔷 Frontend Homebanking NextJS 🔷

- [Backend del proyecto hecho con Django](https://github.com/AgusT613/itba_full_stack_back) 🏹
- [Configuración del proyecto](#🔸-instalación-del-proyecto) ⏬
- [Credenciales para testear la aplicación](#🔸-credenciales) ⏬

## 🔸 Instalación del proyecto

- Clonar el repositorio y acceder a la carpeta.

```bash
  git clone https://github.com/AgusT613/itba_full_stack_front.git

  cd itba_full_stack_front
```

- Archivos del proyecto:

  - itba_full_stack_front/

    - app/ (routers)
      - 🟣 inicio/ ---> Aplicacion del homebanking
      - login/
      - register/
      - globals.css
      - icon.png
      - layout.js
      - 🟣 page.js ---> Home del sitio web
    - components/
      - 🟣 Bienvenida/ ---> Home del sitio web
      - CalculadoraPrestamos/
      - Conversor/
      - Cuentas/
      - Footer/
      - FormularioContacto/
      - HeaderHome/
      - IniciarSesion/
      - 🟣 Inicio/ ---> Aplicacion del homebanking
      - MenuLateral/
      - Pagos/
      - Transferencias/
      - TituloNavegacion.jsx
    - context/
      - 🟣 api_urls.js ---> Endpoints de las api con funciones de llamada mediante fetch
      - 🟣 datosUsuario.js ---> Objeto "datos" que guarda la informacion del usuario logueado
      - datosUsuarioContexto.jsx
      - usuarioContexto
    - public/
    - 🟣 styles/ ---> CSSModules
    - .eslintrc.json
    - .gitignore
    - jsconfig.json
    - next.config.js
    - package-lock.json
    - package.json
    - postcss.config.js
    - 🔻 README.md
    - 🟣 tailwind.config.js

- Una vez hecho, ejecutar la instalacion de dependencias.

```bash
  npm install
```

- Por último, arrancar el servidor de desarrollo:

```bash
  npm run dev
```

## 🔸 Credenciales

- Creadas para testear la aplicación en el formulario de inicio de sesion.
- Al loguearse con algun nombre de usuario deberia aparecer en el border superior la bienvenida con el nombre.
- En caso de no cargarse los datos adecuadamente en la aplicacion del homebanking, refrescar la página.

```json
{
  username = agust613
  password = agustin123
},
{
  username = pablo
  password = pablo123
}
```
