// parâmetros de função
                // parametro
                // 2     //2
function soma(numero1, numero2) {
  return numero1 + numero2;
}

// console.log(soma(2, 2))
// console.log(soma(50, 20))

// parâmetros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome}, e minha idade é ${idade}`
}

//console.log(nomeIdade('Isamara' , 21))

function multiplica(num1, num2) {
  return num1 * num2;
}

             //9*6           // 9      // 6
console.log(multiplica(soma(4,  5), soma(3, 3)))

function cumprimentar(){
  console.log('oi gente!')
 }
 
 cumprimentar()




 function cumprimentaPessoa(pessoa){
  console.log(`oi, ${pessoa}!`)
 }
 
 cumprimentaPessoa('Helena')




 function cumprimentar(){
  return 'Oi gente!'
 }
 
 function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
 }
 
 cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”



 function operacaoMatematica(numero1, numero2, numero3) {
  return numero1 + numero2 + numero3
 }
 
 operacaoMatematica(15, 30, 45) // 90


 function comParametro(param) {
  console.log(param)
}
comParametro()