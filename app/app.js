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

// Capturando o evento submit do formulário do index
$('#form').submit((e) => {
    e.preventDefault(); //Evitando o carregamento automático da página após o click
    const nome = $('input').val().toUpperCase()


    // Realizando verificação para resgatar os dados do Estado digitado 
    for (let i = 0; i < estados.length; i++) {
        // armazenando índice de igualdade em uma variável
        const nomesComparados = comparaString.compareTwoStrings(nome, nomes[i])
        if (nomesComparados >= 0.5) {
            let estado = estados[i]

            const tdSigla = $('<td>').html(`${estado.sigla}`)
            const tdNome = $('<td>').html(`${estado.nome}`)
            const tdCapital = $('<td>').html(`${estado.capital}`)
            const tdRegiao = $('<td>').html(`${estado.regiao}`)

            $('#dados-estado').append(tdSigla).append(tdNome)
                .append(tdCapital).append(tdRegiao)
            return
        } else {
            console.log('erro')
        }
    }
})