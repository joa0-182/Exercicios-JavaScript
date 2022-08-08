/*

    3) Elaborar um algoritmo que informe se um número informado pelo usuário é par ou ímpar.

*/

window.confirm("Elaborar um algoritmo que informe se um número informado pelo usuário é par ou ímpar.")


var numero = Number.parseInt(prompt("Digite o número"))


if (numero % 2 == 0) {
    window.alert("Par")
} else {
    window.alert("Impar")
}