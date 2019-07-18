import estados from '../dados/estados' //simulando dados que viriam de um banco de dados
import $ from 'jquery'

//API utilizada para estabelecer índice de igualdade entre strings
//Achei mais interessante de utilizar no lugar de Regex e .replace() nesse caso
import comparaString from 'string-similarity'

// mapeando apenas o nome (transformando em maísculos) dos Estados
const nomes = estados.map(p => {
    const nome = p.nome.toUpperCase()
    return nome
})


const retornarEstado = function () {
    // Capturando o evento submit do formulário do index
    $('#form').submit((e) => {
        e.preventDefault(); //Evitando o carregamento automático da página após o click
        const nome = $('input').val().toUpperCase()

        // Realizando verificação para resgatar os dados do Estado digitado 
        let nomesComparados = []
        let estado = {}

        for (let i in nomes) {
            // armazenando índice de igualdade em uma variável
            nomesComparados = comparaString.compareTwoStrings(nome, nomes[i])
            if (nomesComparados >= 0.5) {
                estado = estados[i]
            }
        }
        if (estado.nome === undefined) {
            const erro = $('<td>').html(`Estado não escontrado. Estado digitado ${nome}`)
            $('.erro').empty()
            $('#dados-estado').empty()
            $('.erro').append(erro).addClass('d-block')

        } else {
            const tdSigla = $('<td>').html(`${estado.sigla}`)
            const tdNome = $('<td>').html(`${estado.nome}`)
            const tdCapital = $('<td>').html(`${estado.capital}`)
            const tdRegiao = $('<td>').html(`${estado.regiao}`)

            $('#dados-estado').empty()
            $('.erro').addClass('d-none')
            $('.erro').empty()
            $('#dados-estado').append(tdSigla).append(tdNome)
                .append(tdCapital).append(tdRegiao)

        }

    })
}

retornarEstado()