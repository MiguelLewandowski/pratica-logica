import readline from 'readline-sync';

const matriz = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let somaPrincipal = 0;
let somaSecundaria = 0;

let elementosPrincipal = "";
let elementosSecundaria = "";

console.log("Digite os elementos da matriz 3x3:");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = readline.questionInt(`Elemento [${i}][${j}]: `);
  }
}

for (let i = 0; i < 3; i++) {
  elementosPrincipal += matriz[i][i] + " ";
  somaPrincipal += matriz[i][i];

  elementosSecundaria += matriz[i][2 - i] + " ";
  somaSecundaria += matriz[i][2 - i];
}

console.log("\nElementos da Diagonal Principal:");
console.log(elementosPrincipal);

console.log("\nElementos da Diagonal Secundária:");
console.log(elementosSecundaria);

console.log(`\nSoma dos Elementos da Diagonal Principal:`);
console.log(somaPrincipal);

console.log(`\nSoma dos Elementos da Diagonal Secundária:`);
console.log(somaSecundaria);
