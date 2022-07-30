/*

    9) Faça um algoritmo que leia uma temperatura em Graus Fahrenheits e mostre a temperatura em Graus Celsius.

*/

window.confirm("Faça um algoritmo que leia uma temperatura em Graus Fahrenheits e mostre a temperatura em Graus Celsius.")


var temperaturaF = Number.parseFloat(prompt("Digite a temperatura em Fehrenheits: "))

var temperaturaC = (temperaturaF - 32) * 5/9


window.alert(`${temperaturaC.toFixed(1)} Graus Celsius.`)