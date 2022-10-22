//Deletando um conjunto de chave/valor

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

//removendo a propriedade aliado

delete objPersonagem.aliado;
delete objPersonagem['status'];
console.log(objPersonagem.aliado); // undefined
console.log(objPersonagem.status); // undefined
console.log(objPersonagem); 