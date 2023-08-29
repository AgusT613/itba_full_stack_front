const contenedorFormulario = document.querySelector('.contenedor__formulario')
const contenedorMensaje = document.querySelector('.contenedor__mensaje')
const paginaPrincipal = './src/pagina_principal/pagina_principal.html'

const usuario = {
  nombreUsuario: 'admin',
  contraseña: 1234
}

const validaciones = {
  campoVacio: 'Complete los campos',
  datosIncorrectos: 'Datos de usuario incorrectos'
}

const crearMensaje = (contenedorPadre, mensaje) => {
  // Se evita mostrar mas de un mensaje en la validacion de los datos
  if (!contenedorPadre.hasChildNodes() || contenedorPadre.textContent !== mensaje) {
    contenedorPadre.textContent = mensaje
  }
}

const loguearUsuario = (evento) => {
  evento.preventDefault()
  // Datos del formulario
  const objetoFormulario = new FormData(contenedorFormulario)
  const datosUsuario = Object.fromEntries(objetoFormulario)
  const { nombreUsuario, contraseña } = datosUsuario
  // Si los campos estan vacios
  if (nombreUsuario === '' || contraseña === '') {
    crearMensaje(contenedorMensaje, validaciones.campoVacio)
  } else if (nombreUsuario !== usuario.nombreUsuario || parseInt(contraseña) !== usuario.contraseña) {
    // En caso de algun error en los datos muestra un mensaje de error al usuario
    crearMensaje(contenedorMensaje, validaciones.datosIncorrectos)
  } else {
    contenedorFormulario.reset()
    location.href = paginaPrincipal
  }
}

contenedorFormulario.addEventListener('submit', loguearUsuario)
