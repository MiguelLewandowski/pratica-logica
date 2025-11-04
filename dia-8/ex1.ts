import readline from "readline-sync";

let cores: string[] = [];

for (let i = 0; i < 5; i++) {
  let cor = readline.question(`Digite a ${i + 1}a cor: `);
  cores.push(cor);
}

console.log("\nListar todas as cores:");
for (const cor of cores) {
  console.log(cor);
}

console.log("\nOrdenar as cores:");
cores.sort();

for (const cor of cores) {
  console.log(cor);
}
