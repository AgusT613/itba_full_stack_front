// Contenedors principales
const menuLateral = document.querySelector('.menu__lateral')
const menuHamgurguesa = document.querySelector('.menu__hamburguesa')
// Saber en que momentos el menu esta visible o no
let estadoDelMenu = false
// Funcion para el responsive del menu hamburguesa
const desplegarMenuLateral = (estado) => {
  estadoDelMenu = estado
  if (estado) {
    menuLateral.classList.add('menu__lateral__visible')
    menuLateral.classList.remove('menu__lateral')
    menuHamgurguesa.classList.add('menu__hamburguesa__lateral__visible')
  } else {
    menuLateral.classList.remove('menu__lateral__visible')
    menuLateral.classList.add('menu__lateral')
    menuHamgurguesa.classList.remove('menu__hamburguesa__lateral__visible')
  }
}

menuHamgurguesa.addEventListener('click', () => {
  desplegarMenuLateral(!estadoDelMenu)
})
