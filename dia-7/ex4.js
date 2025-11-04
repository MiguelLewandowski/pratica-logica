import readline from 'readline-sync';

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numeroProcurado;
let posicaoEncontrada = -1;

numeroProcurado = readline.questionInt("\nDigite o numero que voce deseja encontrar: ");

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === numeroProcurado) {
    posicaoEncontrada = i;
    break;
  }
}


if (posicaoEncontrada !== -1) {
  console.log(`O numero ${numeroProcurado} esta localizado na posicao: ${posicaoEncontrada}`);
} else {
  console.log(`O numero ${numeroProcurado} nao foi encontrado!`);
}
