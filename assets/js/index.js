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

function calcular() {
    let navi = parseInt(document.querySelector("#navi").value ? document.querySelector("#navi").value : 0);
    let faze = parseInt(document.querySelector("#faze").value ? document.querySelector("#faze").value : 0);
    let g2 = parseInt(document.querySelector("#g2").value ? document.querySelector("#g2").value : 0);

    let resultado = navi + faze + g2;

    if (resultado > 10) {
        alert("te salio un total de: " + resultado + " stickers, solo puedes llevar 10 en total");
    }

    if (resultado < 10) {
        alert("llevas un total de: " + resultado + " stickers, excelente compra");
    }
}

/*------------------- */

/* password*/
function clave() {

    let selectOne = document.querySelector("#selectOne");
    let selectTwo = document.querySelector("#selectTwo");
    let selectTre = document.querySelector("#selectTre");

    const passwordOne = "911";
    const PasswordTwo = "714";

    let valor = selectOne.value + selectTwo.value + selectTre.value;
    console.log(valor);

    if (valor === passwordOne) {
        alert("password 1 es correcta");
    }

    if (valor === PasswordTwo) {
        alert("password 2 es correcta");
    } else {
        alert("password no existente ");
    }

/*------------------------------------------------------- */



}
