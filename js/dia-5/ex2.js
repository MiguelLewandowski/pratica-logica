import readline from 'readline-sync'

let n1, n2, n3, n4, media;

n1 = readline.questionFloat("\nDigite a primeira nota: ", { limitMessage: 'Digite um numero float' });
console.log("A primeira nota digitada foi: " + n1);

n2 = readline.questionFloat("\nDigite a primeira nota: ", { limitMessage: 'Digite um numero float' });
console.log("A primeira nota digitada foi: " + n2);

n3 = readline.questionFloat("\nDigite a primeira nota: ", { limitMessage: 'Digite um numero float' });
console.log("A primeira nota digitada foi: " + n3);

n4 = readline.questionFloat("\nDigite a primeira nota: ", { limitMessage: 'Digite um numero float' });
console.log("A primeira nota digitada foi: " + n4);

media = (n1 + n2 + n3 + n4) / 4;
console.log("A media final e de: " + media.toFixed(2))