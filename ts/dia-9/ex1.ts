import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();
let opcao: string = '';

while (opcao !== '0') {
    console.log("\n1: Adicionar um novo Cliente na fila");
    console.log("2: Listar todos os Clientes na fila");
    console.log("3: Chamar (retirar) uma pessoa da fila");
    console.log("0: Sair do programa");

    opcao = readlinesync.question("Digite uma opcao: ");

    switch (opcao) {
        case '1':
            const nome = readlinesync.question("Digite o nome: ");
            fila.enqueue(nome);
            console.log("\nFila:");
            fila.printQueue();
            console.log("Cliente Adicionado!");
            break;

        case '2':
            console.log("\nLista de Clientes na Fila:");
            if (fila.isEmpty()) {
                console.log("A Fila está vazia!");
            } else {
                fila.printQueue();
            }
            break;

        case '3':
            if (fila.isEmpty()) {
                console.log("\nA Fila está vazia!");
            } else {
                fila.dequeue();
                console.log("\nFila:");
                fila.printQueue();
                console.log("O Cliente foi Chamado!");
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