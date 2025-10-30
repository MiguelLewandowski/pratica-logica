import readline from 'readline-sync'

let n1, n2, n3, n4;

n1 = readline.questionFloat("\nDigite o primeiro numero: ", { limitMessage: 'Digite um numero float' });
n2 = readline.questionFloat("\nDigite o segundo numero: ", { limitMessage: 'Digite um numero float' });
n3 = readline.questionFloat("\nDigite o terceiro numero: ", { limitMessage: 'Digite um numero float' });
n4 = readline.questionFloat("\nDigite o quarto numero: ", { limitMessage: 'Digite um numero float' });


let diferenca = (n1 * n2) - (n3 * n4);
console.log("A diferenca do produto entre n1 e n2 e o produto de n3 e n4 e de: " + diferenca)