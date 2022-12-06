function tela() {
    if(window.innerWidth <=726){
        menucomputer.style.display = 'none'
        menuicon.style.display = 'block'
        menumobile.style.display = 'none'
    } else {
        menucomputer.style.display = 'block'
        menuicon.style.display = 'none'
        menumobile.style.display = 'none'
    }
}



function menushow() {
    if(menumobile.style.display == 'none') {
        menumobile.style.display = 'block'
    } else {
        menumobile.style.display = 'none'
    }
}
