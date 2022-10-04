/*image desafio*/
document.querySelector("#main-image").addEventListener("click", function () {
    document.querySelector("#main-image img").classList.toggle("border");
})




document.querySelector("#boton").addEventListener("click", function () {
    document.querySelector("#boton").classList.toggle("boton-bgColor");
})
/*-----------*/


/*stickers desafio*/
let navi = document.querySelector("#navi");
let faze = document.querySelector("#faze");
let g2 = document.querySelector("#g2");
let boton = document.querySelector("#boton2");
let text = document.querySelector("#sticker-text");

function calcular() {
    let navi = parseInt(document.querySelector("#navi").value ? document.querySelector("#navi").value : 0);
    let faze = parseInt(document.querySelector("#faze").value ? document.querySelector("#faze").value : 0);
    let g2 = parseInt(document.querySelector("#g2").value ? document.querySelector("#g2").value : 0);

    let resultado = navi + faze + g2;

    if (resultado > 10) {
        text.innerHTML = `tienes la cantidad de ${resultado} stickers, llevas demasioados`;
    }

    if (resultado < 10) {
        text.innerHTML = `tienes la cantidad de ${resultado} stickers`;
    }
}

/*------------------- */

/* password*/
function clave() {

    let selectOne = document.querySelector("#selectOne");
    let selectTwo = document.querySelector("#selectTwo");
    let selectTre = document.querySelector("#selectTre");
    let passwordText = document.querySelector("#text-password")

    const passwordOne = "911";
    const PasswordTwo = "714";

    let valor = selectOne.value + selectTwo.value + selectTre.value;
    console.log(valor);

    if (valor === passwordOne) {
        passwordText.innerHTML = "Password 1 ingresada correctamente";
    }

    else if (valor === PasswordTwo) {
        passwordText.innerHTML = "Password 2 ingresada correctamente";
    } else {
       passwordText.innerHTML = "password no existente";
    }

/*------------------------------------------------------- */



}
