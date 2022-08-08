/*

    9) Elabore um algoritme que leia o ano de nascimento do usuário e informe se ele pode ou não votar. Faça uma pesquisa para descobrir os limites de idades em que o voto deve ser proibido, obrigatório ou facultativo.

*/

var dataNascimento = Number.parseInt(prompt("Digite o ano em que você nasceu"))

var idade = 2022 - dataNascimento


if (idade <= 15) {
    window.alert("Proibido votar")
} else if (idade >= 16 && idade <= 17){
    window.alert("Voto facultativo") 
} else if (idade >= 18 && idade <= 70) {
    window.alert("Voto obrigatório")
} else {
    window.alert("Voto facultativo") 
}