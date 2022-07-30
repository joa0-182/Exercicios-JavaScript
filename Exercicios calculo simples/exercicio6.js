/*

    6) O custo ao consumidor de um carro novo, é a soma do custo de fábrica com a percentagem do revendedor e com o custo dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do revendedor seja de 25% do custo de fábrica e que os impostos custam 45 % do custo de fábrica, faça um algoritmo que leia o valor de custo de fábrica e determine o preço final do automóvel (custo ao consumidor).

*/

window.confirm("O custo ao consumidor de um carro novo, é a soma do custo de fábrica com a percentagem do revendedor e com o custo dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do revendedor seja de 25% do custo de fábrica e que os impostos custam 45 % do custo de fábrica, faça um algoritmo que leia o valor de custo de fábrica e determine o preço final do automóvel (custo ao consumidor).")


var valorCustoDeFabrica = Number.parseFloat(prompt("Digite o valor do custo de fábrica: "))

var porcentagemRevendedor = 25/100
var porcetagemImpostos = 45/100

var valorRevendedor = valorCustoDeFabrica * porcentagemRevendedor
var valorImpostos = valorCustoDeFabrica * porcetagemImpostos

var precoFInal = valorCustoDeFabrica + valorRevendedor + valorImpostos


window.alert(`Preço final: ${precoFInal}\n\nValor Revendedor aplicado --> ${valorRevendedor}\nValor dos Impostos aplicado --> ${valorImpostos}`)