import readline from 'readline-sync';

let codigoProduto, quantidade;
let nomeProduto;
let precoUnitario;
let valorTotal;

codigoProduto = readline.questionInt("Codigo do Produto: ");
quantidade = readline.questionInt("Quantidade: ");

switch (codigoProduto) {
  case 1:
    nomeProduto = "Cachorro Quente";
    precoUnitario = 10.00;
    break;
  case 2:
    nomeProduto = "X-Salada";
    precoUnitario = 15.00;
    break;
  case 3:
    nomeProduto = "X-Bacon";
    precoUnitario = 18.00;
    break;
  case 4:
    nomeProduto = "Bauru";
    precoUnitario = 12.00;
    break;
  case 5:
    nomeProduto = "Refrigerante";
    precoUnitario = 8.00;
    break;
  case 6:
    nomeProduto = "Suco de laranja";
    precoUnitario = 13.00;
    break;
  default:
    console.log("Código de produto inválido.");
}

if (nomeProduto) {
  valorTotal = quantidade * precoUnitario;
  console.log(`Produto: ${nomeProduto}`);
  console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
}