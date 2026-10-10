const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const total = tarefas.length;

document.getElementById("totalTarefas").textContent = total