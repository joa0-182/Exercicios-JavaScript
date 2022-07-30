/*

    10) Elabore um algoritmo que leia dois valores inteiros, A e B, e apresente os valores trocados, ou seja, que troque o valor da variável A pelo valor da variável B e vice-versa.

*/

window.confirm("Elabore um algoritmo que leia dois valores inteiros, A e B, e apresente os valores trocados, ou seja, que troque o valor da variável A pelo valor da variável B e vice-versa.")


var a = Number(prompt("Digite o valor de A: "))
var b = Number(prompt("Digite o valor de B: "))

var c = a
a = b
b = c


window.alert(`Valor A: ${a}\nValor B: ${b}`)