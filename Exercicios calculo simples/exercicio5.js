/*

    5) Construa um algoritmo que leia o nome de um aluno e três notas obtidas durante o semestre, ao final mostre o nome do aluno e a média aritmética das notas.

*/

window.confirm("Construa um algoritmo que leia o nome de um aluno e três notas obtidas durante o semestre, ao final mostre o nome do aluno e a média aritmética das notas.")

var nome = String(prompt("Nome aluno: "))

var nota1 = Number.parseInt(prompt("Digite sua nota do primeiro semestre: "))
var nota2 = Number.parseInt(prompt("Digite sua nota do segundo semestre: "))
var nota3 = Number.parseInt(prompt("Digite sua nota do terceiro semestre: "))

var media = (nota1 + nota2 + nota3) / 3

window.alert(`O Aluno ${nome} teve a média final de ${media.toFixed(1)}`)