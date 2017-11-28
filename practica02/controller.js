
var arrayNumeros = [3, 4, 5, 6];
arrayNumeros[3] = 7;
arrayNumeros[4] = 9;

function mostraArray() {
    var info = document.getElementById("infoArray");
    for (k = 0; k < arrayNumeros.length; k++) {
        info.innerHTML += "<div>" + arrayNumeros[k] + "</div>";
    }

    function primerMetodo() {
        var info2 = document.getElementById("PRIMER Y ÚLTIMO NÚMERO");
        info2.innerHTML += "<div>" + arrayNumeros[0] + ", " + arrayNumeros[4] + "<div>";
    }

    function segundoMetodo() {
        var numero = window.prompt("Indica el numero");
        arrayNumeros.push(numero);
        mostraArray();
    }

    function tercerMetodo() {
        var numero = window.prompt("Indica el numero");
        arrayNumeros.unshift(numero);
        mostraArray();
    }

    function cuartoMetodo() {
        arrayNumeros.pop();
        mostraArray();
    }

    function quintoMetodo() {
        arrayNumeros.shift();
        mostraArray();
    }
    function sextoMetodo() {
        arrayNumeros.calculate();
        mostraArray();
    }

    function septimoMetodo() {
        var numero = window.prompt("Indica el numero");
        arrayNumeros.splice(numero, 1);
        mostraArray();
    }

    function octavoMetodo() {
        var numero = window.prompt("Indica el numero");
        numero = parseInt(numero);
        var n = (arrayNumeros.indexOf(numero));
        for (i = 0; arrayNumeros.length; i++) {
            if (n === arrayNumeros[i]) {
                arrayNumeros.splice(n, 1);
                mostraArray();
            } else {
                window.prompt("Error");
            }

        }
    }
}
