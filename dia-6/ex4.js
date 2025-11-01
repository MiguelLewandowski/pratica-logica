import readline from 'readline-sync';

let nomeColaborador, codigoCargo;
let salario, novoSalario;
let percentualReajuste;
let nomeCargo;

nomeColaborador = readline.question("Nome do colaborador: ");
codigoCargo = readline.questionInt("Cargo: ");
salario = readline.questionFloat("Salario: R$ ");

switch (codigoCargo) {
  case 1:
    nomeCargo = "Gerente";
    percentualReajuste = 0.10;
    break;
  case 2:
    nomeCargo = "Vendedor";
    percentualReajuste = 0.07;
    break;
  case 3:
    nomeCargo = "Supervisor";
    percentualReajuste = 0.09;
    break;
  case 4:
    nomeCargo = "Motorista";
    percentualReajuste = 0.06;
    break;
  case 5:
    nomeCargo = "Estoquista";
    percentualReajuste = 0.05;
    break;
  case 6:
    nomeCargo = "Técnico de TI";
    percentualReajuste = 0.08;
    break;
  default:
    console.log("Código de cargo inválido.");
}

if (nomeCargo) {
  novoSalario = salario + (percentualReajuste * salario);
  console.log(`Nome do colaborador: ${nomeColaborador}`);
  console.log(`Cargo: ${nomeCargo}`);
  console.log(`Salario: R$ ${novoSalario.toFixed(2)}`);
}