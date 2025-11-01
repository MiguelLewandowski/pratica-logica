import readline from 'readline-sync';

let numero;
let paridade;
let sinal;

numero = readline.questionInt("Digite um numero: ");

if (numero % 2 === 0) {
  paridade = "par";
} else {
  paridade = "ímpar";
}

if (numero > 0) {
  sinal = "positivo";
} else {
  sinal = "negativo";
}

console.log(`O Numero ${numero} e ${paridade} e ${sinal}!`);