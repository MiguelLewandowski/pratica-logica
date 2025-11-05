import readline from 'readline-sync';

let idade = 0;
let totalMenores21 = 0;
let totalMaiores50 = 0;

idade = readline.questionInt("Digite uma idade: ");

while (idade >= 0) {

  if (idade < 21) {
    totalMenores21++;
  }

  if (idade > 50) {
    totalMaiores50++;
  }

  idade = readline.questionInt("Digite uma idade: ");
}

console.log(`\nTotal de pessoas menores de 21 anos: ${totalMenores21}`);
console.log(`Total de pessoas maiores de 50 anos: ${totalMaiores50}`);
