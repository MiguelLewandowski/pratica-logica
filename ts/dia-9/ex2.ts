import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>();
let opcao: string = '';

while (opcao !== '0') {
    console.log("\n1: Adicionar um novo livro na pilha");
    console.log("2: Listar todos os livros da Pilha");
    console.log("3: Retirar um livro da pilha");
    console.log("0: Sair do programa");

    opcao = readlinesync.question("Digite uma opcao: ");

    switch (opcao) {
        case '1':
            const nomeLivro = readlinesync.question("Digite o nome: ");
            pilha.push(nomeLivro);
            console.log("\nPilha:");
            pilha.printStack();
            console.log("Livro adicionado!");
            break;

        case '2':
            console.log("\nLista de Livros na Pilha:");
            if (pilha.isEmpty()) {
                console.log("A Pilha está vazia!");
            } else {
                pilha.printStack();
            }
            break;

        case '3':
            if (pilha.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                pilha.pop();
                console.log("\nPilha:");
                pilha.printStack();
                console.log("Um Livro foi retirado da pilha!");
            }
            break;

        case '0':
            console.log("\nPrograma Finalizado!");
            break;

        default:
            console.log("\nOpção inválida. Tente novamente.");
            break;
    }
}