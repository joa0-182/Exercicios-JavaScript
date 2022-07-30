/*

    3) Um cliente de um banco tem um saldo positivo de R$ 500,00. Fazer um algoritmo que leia um cheque que entrou e calcule o saldo, mostrando (escrevendo) o novo saldo na tela.

*/

window.confirm("Um cliente de um banco tem um saldo positivo de R$ 500,00. Fazer um algoritmo que leia um cheque que entrou e calcule o saldo, mostrando (escrevendo) o novo saldo na tela.")

var clienteSaldoP = 500

var valorChequeEntrar = Number.parseFloat(prompt("Digite o valor de entrada do novo cheque: "))


var novoSaldo = clienteSaldoP + valorChequeEntrar

window.alert(`Novo saldo: ${novoSaldo} \nSaldo antigo --> ${clienteSaldoP}`)