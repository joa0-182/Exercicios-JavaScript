/*

    8) Elabore um algoritmo que dada a idade de um nadador classifica-o 
       em uma das seguintes categorias:
        Infantil A --> 5 a 7 anos
        Infantil B --> 8 a 10 anos
        Juvenil A  --> 11 a 13 anos
        Juvenil B  --> 14 a 17 anos
        Adulto     --> Maior ou igual a 18 anos

*/


var nadador = Number.parseInt(window.prompt("Digite a idade do nadador: "))


if (nadador >= 5 && nadador <= 7) {
    window.alert("Nadador Infantil A")
} else if (nadador >= 8 && nadador <= 10) {
    window.alert("Nadador Infantil B")
} else if (nadador >= 11 && nadador <= 13) {
    window.alert("Nadador Juvenil A")
} else if (nadador >= 14 && nadador <= 17) {
    window.alert("Nadador Juvenil B")
} else {
    window.alert("Nadador Adulto")
}