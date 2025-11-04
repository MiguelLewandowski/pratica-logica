import readline from "readline-sync";

let numeros = new Set<number>();

for (let i = 0; i < 10; i++) {
  let num = readline.questionInt(`Digite o ${i + 1}o numero: `);
  numeros.add(num);
}

console.log("\nListar dados do Set:");

for (const num of numeros) {
  console.log(num);
}
