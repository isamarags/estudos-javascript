let alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
let notas = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => notas[indice] < 5)

console.log(reprovados);