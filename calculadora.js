
document.addEventListener("DOMContentLoaded", function () {
    var resultado = document.getElementById("resultado");
    var numeros = document.querySelectorAll('.calculadora button:not(#botonIgual)');
    var igual = document.getElementById("botonIgual");
    var borrar = document.getElementById("botonC");
    var retroceder = document.getElementById("retroceso");
    var division = document.getElementById("dividir");
    var multiplicacion = document.getElementById("multiplicar");
    var resta = document.getElementById("restar");
    var suma = document.getElementById("suma");
    var decimal = document.getElementById("decimal");

    numeros.forEach(
        function (boton) {
            boton.addEventListener('click', function () { resultado.value += boton.value; });
        }
    );
    igual.addEventListener('click', function () {
        resultado.value = eval(resultado.value);
    });
    borrar.addEventListener('click', function () {
        resultado.value = " ";
    });
    retroceder.addEventListener('click', function () {
        resultado.value = resultado.value.slice(0, -1);
    });
    division.addEventListener('click', function () {
        resultado.value += "/";
    });
    multiplicacion.addEventListener('click', function () {
        resultado.value += "*";
    });
    resta.addEventListener('click', function () {
        resultado.value += "-";
    });
    suma.addEventListener('click', function () {
        resultado.value += "+";
    });
    decimal.addEventListener('click', function () {
        resultado.value += ".";
    });
});



