function calcular() {
    // capturando o id do formulario
    var formulario = document.getElementById("formulario");

    // kilos é minha variavel
    // formulario é o id do meu formulario
    // value é o valor do input
    // o + na frente transforma em number a string

    var kilos = +formulario.kilos.value;
    var metros = +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;

    // altura
    var altura = (metros * 100 + centimetros) / 100;

    // imc
    var imc = kilos / (altura * altura);

    // o metodo toFixed fixa somente duas casas decimais após o ponto.
    formulario.imc.value = imc.toFixed(2);

    if (imc < 20) {
        alert('Você esta abaixo do peso');
    } else if (imc > 20 && imc <= 25) {
        alert("Peso Ideal");
    } else if (imc > 25 && imc <= 30) {
        alert("Sobrepeso");
    } else if (imc > 30 && imc <= 35) {
        alert("Obesidade Moderada");
    } else if (imc > 35 && imc <= 40) {
        alert("Obesidade Severa");
    } else if (imc > 40 && imc <= 50) {
        alert("Obesidade Morbida");
    } else {
        alert('Gordo');
    }
}