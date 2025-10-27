const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const menu = document.querySelector('.menu-links');
const mascaraMenu = document.querySelector(".mascara-menu")
const btn = document.querySelector(".menu-toggle")

function cliqueinobotao () {

    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function sumirForm () {
    
    form.style.left = "-150px"
    mascara.style.visibility = "hidden"

}

function toggleMenu() {
    
    menu.classList.add('show');
    mascaraMenu.style.visibility = "visible"
}

function sumirMenu () {
    
    mascaraMenu.style.visibility = "hidden"
    menu.classList.remove('show');
}

document.addEventListener('click', function(e) {

    if( !menu.contains(e.target) && !btn.contains(e.target) ){

        sumirMenu();

    } else {



    }

})

btn.addEventListener('click', () => {

    const isOpen = menu.classList.contains('show');
    if (isOpen) {

        //fecha o menu
        sumirMenu();
    } else{

        //abre o menu 
        menu.classList.add('show');
        mascaraMenu.style.visibility = "visible";

    }

})