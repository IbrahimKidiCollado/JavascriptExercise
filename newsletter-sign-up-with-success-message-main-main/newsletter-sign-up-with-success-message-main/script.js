var entrada = document.getElementById("email")
var container1 = document.getElementById("primeraPantalla")
var container2 = document.getElementById("containerSecundario")


function verificar() {
    let cadena = entrada.value
    
    if (cadena.includes("@")) {
        correcto(cadena);
    } else {
        fallo();
    }
    entrada.value = ""
}

function correcto(cadena) {
    let emailBold = document.getElementById("emailBold")

    container1.style.display = "none"
    container2.style.display = "block"
    emailBold.innerHTML = cadena
    emailBold.style.fontWeight = "700"
}

function fallo() {
    let mensajeFallo = document.getElementById("fallo")
    
    mensajeFallo.style.display = "block"
    email.style.color = "#e77260"
    email.style.backgroundColor = "#e7caca"
    email.style.border = "solid 1px #e77260"
    email.style.outline = "#e77260"
}

function cerrarVentana() {
    let mensajeFallo = document.getElementById("fallo")
    
    container2.style.display = "none"
    container1.style.display = "flex"
    mensajeFallo.style.display = "none"
    email.style.color = "black"
    email.style.backgroundColor = "white"
    email.style.outline = "auto"
    email.style.border = "auto"
}

function responsive() {
    setTimeout(function() {
        let tamañoPantalla = window.innerWidth;
        console.log("Tamaño de pantalla: ", tamañoPantalla);

        let imagenCambia = document.getElementById("imagen1");

        if (tamañoPantalla <= 375) {
            imagenCambia.src = "/assets/images/illustration-sign-up-mobile.svg";
            imagenCambia.style.width = "100%"
            document.getElementById("titulo").style.fontSize = "50px"
            document.getElementById("imagen1").style.borderRadius = "0px 0px 20px 20px"
            document.getElementById("parteDerecha").style.height = "250px"
            document.getElementById("primeraPantalla").style.margin = "0px"

        } else {
            imagenCambia.src = "/assets/images/illustration-sign-up-desktop.svg";
        }
    }, 100);
}
responsive();

window.addEventListener("resize", responsive);
