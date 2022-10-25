//Compondo um objeto
// Adicionar dependentes para cada um dos clientes cadastrados com nome, idade e parentesco.

const cliente = {
    nome: 'Isamara',
    idade: 22,
    cpf: '0000000000',
    email: 'isamara@email.com',
    fones: ['455321512426', '241654352313']
}

cliente.dependentes = {
    nome: 'Fulano',
    parentesco: 'teste2',
    dataNasc: 'teste3'
}

console.log(cliente);

cliente.dependentes.nome = 'Ciclano'

console.log(cliente);