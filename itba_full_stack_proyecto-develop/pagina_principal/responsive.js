const menuLateral = document.querySelector('.menu__lateral')
const menuHamgurguesa = document.querySelector('.menu__hamburguesa')

let estadoDelMenu = false

const desplegarMenuLateral = (estado)=>{
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

menuHamgurguesa.addEventListener('click', ()=>{
    desplegarMenuLateral(!estadoDelMenu)
})