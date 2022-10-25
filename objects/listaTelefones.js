// ACESSAR LISTA DE TELEFONES
// Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um número em algum cadastro.

const cliente = {
    nome: 'Isamara',
    idade: 22,
    cpf: '0000000000',
    email: 'isamara@email.com',
    fones: ['455321512426', '241654352313']
}

// percorrendo os índices do array fones para mostrar na tela os telefones
cliente.fones.forEach(fone => 
    console.log(fone)
);