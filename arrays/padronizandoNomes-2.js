let nome =  ['ana julia', 'Caio vinicius', 'BIA silva'];

let nomeMaiusculas = '';

for (let i = 0; i < nome.length; i++) {
    nomeMaiusculas += nome[i].toUpperCase();
    
}

console.log(nomeMaiusculas)

// o forEach não tem um retorno, mas o método map() pode retornar um array se a função informada tiver um return em seu escopo