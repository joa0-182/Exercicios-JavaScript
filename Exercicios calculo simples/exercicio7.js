/*

    7) Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.

*/

window.confirm("Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.")


var nomeVendedor = String(prompt("Nome vendedor: "))
var salarioFixo = Number.parseFloat(prompt("Digite seu salário: "))
var vendasEfetuadas = Number.parseFloat(prompt("Digite o número de vendas efetuadas: "))

var comissaoVendas = 15/100
var porcentualComissaoVendas = vendasEfetuadas * comissaoVendas
var lucroComissaoVendas = porcentualComissaoVendas * vendasEfetuadas
var salarioFinal = salarioFixo + lucroComissaoVendas


window.alert(`Vendedor(a) ${nomeVendedor}\nSalário final já aplicado a comissão: ${salarioFinal}\nLucro comissão aplicada --> ${lucroComissaoVendas}`)