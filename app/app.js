//const estados = require('../dados/estados.js')
import estados from '../dados/estados'
import $ from 'jquery'
import { format } from 'path';

const nomes = estados.map(p => {
    const nome = p.nome.toUpperCase()
    return nome
})
console.log(nomes)



const test = "São Paulo"

function getEstados(nome) {
    for (let i = 0; i < estados.length; i++) {
        if (!nome) {
            return
        } else if (nome !== nomes[i]) {
            console.log('err')
        } else {
            let estado = estados[i]

            const tdSigla = $('<td>').html(`${estado.sigla}`)
            const tdNome = $('<td>').html(`${estado.nome}`)
            const tdCapital = $('<td>').html(`${estado.capital}`)
            const tdRegiao = $('<td>').html(`${estado.regiao}`)

            $('#dados-estado').append(tdSigla).append(tdNome)
                .append(tdCapital).append(tdRegiao)
        }
    }

}

