import readline from 'readline-sync';

let numero;
let somaPositivos = 0;

do {
  numero = readline.questionInt("Digite um numero: ");

  if (numero > 0) {
    somaPositivos += numero;
  }

} while (numero !== 0);

console.log(`\nA soma dos numeros positivos é: ${somaPositivos}`);
