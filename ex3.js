import readline from 'readline-sync'

let salarioBruto, adicionalNoturno, horasExtra, desconto;

salarioBruto = readline.questionFloat("\nDigite o salario do funcionario: ", { limitMessage: 'Digite um numero float' });
adicionalNoturno = readline.questionFloat("\nDigite o valor do adicional noturno: ", { limitMessage: 'Digite um numero float' });
horasExtra = readline.questionFloat("\nDigite o valor das horas extras: ", { limitMessage: 'Digite um numero float' });
desconto = readline.questionFloat("\nDigite o valor do desconto: ", { limitMessage: 'Digite um numero float' });

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtra * 5) - desconto;

console.log(salarioLiquido)
