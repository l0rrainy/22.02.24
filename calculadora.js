function calcular() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    let resultado = document.getElementById("resultado");

    resultado.value = parseInt(num1.value) + parseInt(num2.value);
}