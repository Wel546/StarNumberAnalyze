function addNumero(n) {
    var n = window.document.getElementById('Numeros').value
    var selectLista = window.document.getElementById('listaNumeros')
    var numeroAdicionado = new Option(`Valor ${n} adicionado`, n)
    var lista = Array.from(selectLista.options).map(option => option.value)
    if(n.length == 0) {
        window.alert('[ERRO!] Insira um número entre 1 e 100!')
    } else if(lista.includes(n)) {
        window.alert("[ERRO!] Valor já registrado!")
    } else if(n > 0 && n < 100) {
        selectLista.add(numeroAdicionado)
    } else {
        window.alert("[ERRO!] O valor inserido está fora da lógica!")
    }
}
    

function concluir() {
    var selectLista = window.document.getElementById('listaNumeros')
    var lista = Array.from(selectLista.options).map(option => option.value)
    var ResConcluir = window.document.getElementById('ResAnalise')
    ResConcluir.innerHTML = ""
    var Soma = Number(lista.reduce((acumulado, valorAtual) => Number(acumulado) + Number(valorAtual), 0))
    var Média = Soma / lista.length
    ResConcluir.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    ResConcluir.innerHTML += `<p>O maior número informado foi ${Math.max.apply(null, lista)}.</p>`
    ResConcluir.innerHTML += `<p>O menor número informado foi ${Math.min.apply(null, lista)}.</p>`
    ResConcluir.innerHTML += `<p>Somando todos os valores, temos ${Soma}.</p>`
    ResConcluir.innerHTML += `<p>A média dos valores digitados é ${Média}.</p>`
}