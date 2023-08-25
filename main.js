// Contenedores
const contenedorFormulario = document.querySelector('.contenedor__formulario')
const contenedorMensaje = document.querySelector('.contenedor__mensaje')
// Link de Página Principal
const paginaPrincipal = './pagina_principal/pagina_principal.html'
// Usuario de Prueba
const usuario = {
    nombreUsuario: 'admin',
    contraseña: 1234
}

const validaciones = {
    campoVacio: 'Complete los campos',
    datosIncorrectos: 'Datos de usuario incorrectos'
}

const crearMensaje = (contenedorPadre, mensaje)=>{
    // Se evita mostrar mas de un mensaje en la validacion de los datos
    if (!contenedorPadre.hasChildNodes() || contenedorPadre.textContent !== mensaje) {
        contenedorPadre.textContent = mensaje
    }
}

const loguearUsuario = (evento)=>{
    // Detiene el comportamiento por defecto del navegador
    evento.preventDefault()
    // Datos del formulario
    const objetoFormulario = new FormData(contenedorFormulario)
    const datosUsuario = Object.fromEntries(objetoFormulario)
    let { nombreUsuario, contraseña} = datosUsuario

    // Si los campos estan vacios
    if (nombreUsuario === '' || contraseña === '') {
        crearMensaje(contenedorMensaje, validaciones.campoVacio)
    }
    // En caso de algun error en los datos muestra un mensaje de error al usuario
    else if (nombreUsuario !== usuario.nombreUsuario || parseInt(contraseña) !== usuario.contraseña){
        // Crea un elemento HTML <p> e inserta un texto
        crearMensaje(contenedorMensaje, validaciones.datosIncorrectos)
    }
    // Sino redirige hacia la pagina principal
    else {
        contenedorFormulario.reset()
        location.href = paginaPrincipal
    }
}
// Escucha del evento 'submit'
contenedorFormulario.addEventListener('submit', loguearUsuario)