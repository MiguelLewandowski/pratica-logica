import readline from 'readline-sync';

let totalPares = 0;
let totalImpares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = readline.questionInt(`Digite o ${i} numero: `);

  if (numero % 2 === 0) {
    totalPares++;
  } else {
    totalImpares++;
  }
}

console.log(`\nTotal de numeros pares: ${totalPares}`);
console.log(`Total de numeros impares: ${totalImpares}`);