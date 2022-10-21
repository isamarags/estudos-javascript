const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaAlunos = [10, 7, 9, 6]
let listaNotasAlunos = [alunos, mediaAlunos]
const exibeNomeNota = (nomeAluno) => {
    if (listaNotasAlunos[0].includes(nomeAluno)) {
        indice = listaNotasAlunos[0].indexOf(nomeAluno)
        return listaNotasAlunos[0][indice] + ', sua média é: ' + listaNotasAlunos[1][indice]
    } else {
        return 'Aluno não está cadastrado'
    }
}

console.log(exibeNomeNota('Ana'))

// let result = `${listaNotasAlunos[0][0]}, sua média é ${listaNotasAlunos[1][0]}`

// console.log(result);