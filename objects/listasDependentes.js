// Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente

const cliente = {
    nome: 'Isamara',
    idade: 22,
    cpf: '0000000000',
    email: 'isamara@email.com',
    fones: ['455321512426', '241654352313'],
    dependentes: [{
    nome: 'Ana',
    parentesco: 'Primo',
    dataNasc: '20/03/2011'
}]
}

cliente.dependentes.push({
    nome: 'Maria', 
    parentesco: 'Primo', 
    dataNasc: '04/01/2014'
})

console.log(cliente);

// filtrando dados do dependente que tenha a dataNasc específica.
// 
const dependenteMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === '04/01/2014')

console.log(dependenteMaisNovo[0].nome);