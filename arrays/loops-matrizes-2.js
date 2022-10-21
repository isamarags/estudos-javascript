// armazenando notas em um array notas
            //  0   1   2   3
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
// inicializando a média de notas como 0;
let media = 0;

// armazenando todas as notas em notasGerais
const notasGerais = [notas1,notas2,notas3]

//loop de iteração para cada nota, fazendo assim, sua média
// inicializando i em 0, i precisa ser menor do que o tamanho do array notasGerais, que é 3, iteração de i de 1 em 1
// este primeiro for de i será executado 3 vezes, com i = 0: notas1, i = 1: notas2, i = 2: notas3
for (let i = 0; i < notasGerais.length; i++) {
    // ele irá realizar a iteração de acordo com a posição da notasGerais, por exemplo: se é notasGerais[i] e ele está em notasGerais[0], ele irá realizar o notasGerais em indice 0, que é notas1, logo, ele irá olhar apenas para as notas 10, 6.5, 8, 7.5;
    for (let j = 0; j < notasGerais[i].length; j++) {
        //  media = media + notas dentro de [i] [j]
        // por exemplo, se notasGerais estiver na posição 1, ele irá olhar apenas para notasGerais[1][p] posição atual do indice do array;
        // nesse exemplo abaixo, estou utilizando o [1] de notasGerais
        // media = 0 + 10
        // media = 10 + 6.5
        // media = 16.5 + 8
        // media = 24.5 + 7.5
        // media = 32 / 4
        // media = 8
        media += notas[i][j] / notasGerais[i].length;
    }
}

console.log(media);