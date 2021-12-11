// =>
 
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1 , num2) => num1 + num2;

const numerosPequenos = (num1, num2) => {
  if (num1 || num2 > 10) {
    return 'somente numeros de 1 a 9'
  } else {
    return num1 + num2;
  }
}

// Hoisting: arrow function se comporta da mesma forma