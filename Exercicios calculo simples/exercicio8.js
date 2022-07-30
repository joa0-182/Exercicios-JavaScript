/*

    8) Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.

*/

window.confirm("Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.")


var cotacaoDolar = Number.parseFloat(prompt("Digite a cotação do dolar hoje: "))
var qtdeDolares = Number.parseFloat(prompt("Quantos dolares posssui?: "))

var conversaoReal = cotacaoDolar * qtdeDolares


window.alert(`Você possui ${conversaoReal.toFixed(2)} Reais.`)