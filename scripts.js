const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueinobotao () {

    form.style.left = "50%"
    form.style.transform = "translatex{-50%}"
    mascara.style.visibility = "visible"

}

function sumirform () {
    
    form.style.left = "-17.6%"
    mascara.style.visibility = "hidden"

}