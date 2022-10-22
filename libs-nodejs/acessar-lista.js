// ACESSAR CHAVES: Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela.

const cliente = {
    nome: 'Isamara',
    idade: 22,
    cpf: '0000000000',
    email: 'isamara@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email'];

// console.log(cliente[chaves[0]]);

chaves.forEach(elemento => 
    console.log(cliente[elemento])
);