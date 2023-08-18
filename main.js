// Contenedores
const contenedorFormulario = document.querySelector('.contenedor__form')
const contenedorMensaje = document.querySelector('.contenedor__mensaje')
// Link de Página Principal
const paginaPrincipal = './pagina_principal/pagina_principal.html'
// Usuario de Prueba
const usuario = {
    nombreUsuario: 'admin',
    contraseña: 1234
}

const loguearUsuario = (evento)=>{
    // Detiene el comportamiento por defecto del navegador
    evento.preventDefault()
    // Datos del formulario
    const objetoFormulario = new FormData(contenedorFormulario)
    const datosUsuario = Object.fromEntries(objetoFormulario)
    let { nombreUsuario, contraseña} = datosUsuario
    console.log(datosUsuario);
    // En caso de algun error en los datos muestra un mensaje de error al usuario
    if (nombreUsuario !== usuario.nombreUsuario || parseInt(contraseña) !== usuario.contraseña){
        // Si el contenedor del mensaje tiene un elemento hijo no muestra el mensaje otra vez
        if (contenedorMensaje.hasChildNodes()) return
        // Crea un elemento HTML <p> e inserta un texto
        const contenedorTexto = document.createElement('p')
        const mensaje = 'Nombre de usuario y contraseña incorrecto'
        contenedorTexto.textContent = mensaje
        contenedorMensaje.appendChild(contenedorTexto)
    } else {
        // Sino redirige hacia la pagina principal
        location.href = paginaPrincipal
    }
}
// Escucha del evento 'submit'
contenedorFormulario.addEventListener('submit', loguearUsuario)