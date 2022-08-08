/*

    2) Elaborar um algoritmo que informe se um ano informado pelo usuário é bissexto ou não.

*/

window.confirm("Elaborar um algoritmo que informe se um ano informado pelo usuário é bissexto ou não.")

var ano = Number.parseInt(prompt("Digite o ano: "))

var anoBissexto = ano % 4 == 0


if (anoBissexto) {
    window.alert(`o ano ${ano} é bissexto.`)
} else {
    window.alert(`o ano ${ano} não é bissexto.`)
}