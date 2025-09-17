let tarefaConcluida: boolean = false;
let tarefaPendente: boolean = true;

console.log(tarefaConcluida);
console.log(tarefaPendente);

//Exemplo prático
function verificarTarefa(tarefa: string, concluida: boolean) {
    if (!concluida) {
        console.log(`A tarefa "${tarefa}" foi concluída.`);
    } else {
        console.log(`A tarefa "${tarefa}" está pendente.`);
    }
}

verificarTarefa("Estudar TypeScript", tarefaConcluida);
verificarTarefa("Fazer exercícios", tarefaPendente);