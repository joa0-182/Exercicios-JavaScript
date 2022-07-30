/*

    4) Considerando que para um consórcio, sabe-se o número total de prestações, a quantidade de prestações pagas e o valor atual da prestação, escreva um algoritmo que determine o total pago pelo consorciado e o saldo devedor.

*/

window.confirm("Considerando que para um consórcio, sabe-se o número total de prestações, a quantidade de prestações pagas e o valor atual da prestação, escreva um algoritmo que determine o total pago pelo consorciado e o saldo devedor.")


var numeroTotalPrestacoes = Number.parseInt(prompt("Digite o número total das prestações a serem pagas: "))
var qtdePrestacoesPagas = Number.parseInt(prompt("Digite a quantidade de prestações JÁ pagas: "))
var valorPrestacao = Number.parseInt(prompt("Digite o valor das prestações: "))


var valorTotalPago = qtdePrestacoesPagas * valorPrestacao
var valorSerPago = numeroTotalPrestacoes * valorPrestacao - valorTotalPago


window.alert(`Valor total já pago de ${qtdePrestacoesPagas} prestações ---> ${valorTotalPago} \nValor a ser pago durante as restantes das prestações: ${valorSerPago}`)