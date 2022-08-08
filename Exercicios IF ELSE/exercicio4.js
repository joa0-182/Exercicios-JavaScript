/* 

    4) Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem: "São múltiplos" ou "Não são múltiplos". 

*/

var a = Number.parseInt(prompt("Digite o valor de A"));
var b = Number.parseInt(prompt("Digite o valor de B"));

if (a % b == 0) {
    window.alert("São múltiplos");
} else {
    window.alert("Não são múltiplos");
}