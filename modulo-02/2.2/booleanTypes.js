"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tarefaConcluida = false;
let tarefaPendente = true;
console.log(tarefaConcluida);
console.log(tarefaPendente);
//Exemplo prático
function verificarTarefa(tarefa, concluida) {
    if (!concluida) {
        console.log(`A tarefa "${tarefa}" foi concluída.`);
    }
    else {
        console.log(`A tarefa "${tarefa}" está pendente.`);
    }
}
verificarTarefa("Estudar TypeScript", tarefaConcluida);
verificarTarefa("Fazer exercícios", tarefaPendente);
//# sourceMappingURL=booleanTypes.js.map