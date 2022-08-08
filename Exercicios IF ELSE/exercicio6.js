/* 

    6) Desenvolva um algoritmo que leia 3 valores inteiros e os apresente em ordem crescente.

*/

window.confirm("Desenvolva um algoritmo que leia 3 valores inteiros e os apresente em ordem crescente.")


var valor1 = Number.parseInt(prompt("Digite o número 1: "))
var valor2 = Number.parseInt(prompt("Digite o número 2: "))
var valor3 = Number.parseInt(prompt("Digite o número 3: "))


if (valor1 <= valor2 && valor2 <= valor3) {
    window.alert(`${valor1} -- ${valor2} -- ${valor3}`)
    //
} else if (valor1 <= valor3 && valor3 <= valor2) {
    window.alert(`${valor1} -- ${valor3} -- ${valor2}`)
    //
} else if (valor2 <= valor1 && valor1 <= valor3) {
    window.alert(`${valor2} -- ${valor1} -- ${valor3}`)
    //
} else if (valor2 <= valor3 &&  valor3 <= valor1) {
    window.alert(`${valor2} -- ${valor3} -- ${valor1}`)
    //
} else if (valor3 <= valor1 && valor1 <= valor2){
    window.alert(`${valor3} -- ${valor2} -- ${valor1}`)
    //
} else {
    window.alert(`${valor3} -- ${valor2} -- ${valor3}`)

}