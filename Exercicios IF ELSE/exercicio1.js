/* 

    1) O sistema de avaliação de determinada disciplina, é composto por três provas. A primeira prova tem peso 4, a Segunda tem peso 3 e a terceira prova tem peso 3. Faça um algoritmo para calcular a média final de um aluno desta disciplina. Caso a média seja maior ou igual a 7 mostre APROVADO, se a média for entre 5 e 7, mostre em RECUPERAÇÃO, e se for menor do que 5 mostre REPROVADO. 

*/

var pesoProva1 = 4
var pesoProva2 = 3
var pesoProva3 = 3

var aluno = String(prompt("Nome do aluno: "))
var nota1 = Number(prompt("Digite a nota da prova 1: "))
var nota2 = Number(prompt("Digite a nota da prova 2: "))
var nota3 = Number(prompt("Digite a nota da prova 3: "))

var mediaAluno = ((nota1 * pesoProva1) + (nota2 * pesoProva2) + (nota3 * pesoProva3)) / (pesoProva1 + pesoProva2 + pesoProva3)

if (mediaAluno >= 7) {
    window.alert(`O aluno ${aluno} teve a média de: ${mediaAluno.toFixed(0)}\nAPROVADO.`)
} else if (mediaAluno > 5 && mediaAluno < 7) {
    window.alert(`O aluno ${aluno} teve a média de: ${mediaAluno.toFixed(0)}\nRECUPERAÇÃO.`)
} else {
    window.alert(`O aluno ${aluno} teve a média de: ${mediaAluno.toFixed(0)}\nREPROVADO.`)
}
