function calcular() { var e = document.getElementById("formulario"),
        a = +e.kilos.value,
        o = (100 * +e.metros.value + +e.centimetros.value) / 100,
        r = a / (o * o);
    e.imc.value = r.toFixed(2), r < 20 ? alert("Você esta abaixo do peso") : r > 20 && r <= 25 ? alert("Peso Ideal") : r > 25 && r <= 30 ? alert("Sobrepeso") : r > 30 && r <= 35 ? alert("Obesidade Moderada") : r > 35 && r <= 40 ? alert("Obesidade Severa") : r > 40 && r <= 50 ? alert("Obesidade Morbida") : alert("Gordo") }