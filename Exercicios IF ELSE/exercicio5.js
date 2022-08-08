/* 

    5) Elabore um algoritmo que leia 3 valores inteiros e mostre o maior valor entre eles.

*/

var valor1 = Number.parseInt(prompt("Dite o valor 1: "))
var valor2 = Number.parseInt(prompt("Dite o valor 2: "))
var valor3 = Number.parseInt(prompt("Dite o valor 3: "))


if (valor1 >= valor2 && valor1 >= valor3){
    window.alert(`O valor ${valor1} é o maior entre os três valores`)
} else if (valor2 >= valor1 && valor2 >= valor3) {
    window.alert(`O valor ${valor2} é o maior entre os três valores`)
} else if (valor3 >= valor1 && valor3 >= valor2) {
    window.alert(`O valor ${valor3} é o maior entre os três valores`)
} else {
    window.alert("Os valores são iguais")
}