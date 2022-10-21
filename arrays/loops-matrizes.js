// armazenando notas em um array notas
            //  0   1   2   3
const notas = [10, 6.5, 8, 7.5]; 
// inicializando a média de notas como 0;
let media = 0;

//loop de iteração para cada nota, fazendo assim, sua média
// inicializando i em 0, i precisa ser menor do que o tamanho do array notas, que é 3, iteração de i de 1 en 1
for (let i = 0; i < notas.length; i++) {
//  media = media + notas
// media = 0 + 10
// media = 10 + 6.5
// media = 16.5 + 8
// media = 24.5 + 7.5
// media = 32 / 4
// media = 8
    media += notas[i] / notas.length;
    
}

console.log(media);