import readline from 'readline-sync'

let salario, abono;

salario = readline.questionFloat("\nDigite o salario do funcionario: ", { limitMessage: 'Digite um numero float' });
console.log("O valor do salario digitado foi: " + salario);

abono = readline.questionFloat("\nDigite o valor do abono: ", { limitMessage: 'Digite um numero float' });
console.log("O valor do abono digitado foi: " + abono);

console.log(salario + abono)