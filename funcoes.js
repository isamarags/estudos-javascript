// funções 

// let x = '';
// console.log(x);
// x = 'oi';

// três formas de escrever funções

// - DECLARAÇÃO DE FUNÇÃO 


// 1- declara a função
                    // string
function imprimeTexto(texto){
  console.log(texto)
}

// 2 - executa a função (1 ou + vezes)

imprimeTexto(soma())
//imprimeTexto('outro texto')


function soma(){
  // outros codigos
  // varios console.log()
  // a linha do return é sempre a ultima do bloco
  return 2 + 2;
}

//console.log(soma())