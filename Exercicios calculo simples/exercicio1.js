/* 

    1) Elabore um algoritmo que leia 3 números e apresente o resultado da soma do primeiro pelo segundo multiplicado pelo terceiro.

*/

window.confirm("1) Elabore um algoritmo que leia 3 números e apresente o resultado da soma do primeiro pelo segundo multiplicado pelo terceiro.")

var numero1 = Number.parseInt(prompt("Digite o primeiro número para soma: "))
var numero2 = Number.parseInt(prompt("Digite o segundo número: "))
var numero3 = Number.parseInt(prompt("Digite o terceiro número pelo qual a soma vai ser multiplicada: "))

var resultado = numero1 + numero2 * numero3

window.alert(`Resultado --> ${resultado}`)
