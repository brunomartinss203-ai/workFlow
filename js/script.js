const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const total = tarefas.length;

document.getElementById("totalTarefas").textContent = total

const botao = document.getElementById("btnAdicionar");
const elemento = document.getElementById("formularioTarefa");

const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const categoria = document.getElementById("categoria");

const formulario = document.getElementById("formTarefa");



formulario.addEventListener("submit", (eve) =>{
    eve.preventDefault();
    const novatarefa = {
        titulo: titulo.value,
        descricao: descricao.value,
        categoria: categoria.value,
        concluida: false
    };

    tarefas.push(novatarefa);
    localStorage.setItem("tarefas",JSON.stringify(tarefas));
    document.getElementById("totalTarefas").textContent = tarefas.length;
   
    exibirTarefas();
    atualizarconcluidas();
    atualizarpendentes();

    
  
});

botao.addEventListener("click",() => {
    if(getComputedStyle(elemento).display === "block"){
    elemento.style.display = "none";
    }
    else{
        elemento.style.display = "block"
    }
});

const lista = document.getElementById("listaTarefas");

function exibirTarefas(){
      lista.replaceChildren();
    
tarefas.forEach((tarefa) => {
  
    const novaDiv = document.createElement("div");

    novaDiv.classList.add("tarefa");

    const info = document.createElement("div");
    info.classList.add("tarefa-info");

    const tituloTarefa = document.createElement("h3");
    tituloTarefa.textContent = tarefa.titulo;

    const descricaotarefa = document.createElement("p");
    descricaotarefa.textContent = tarefa.descricao;

    const categoriatarefa = document.createElement("span");
    categoriatarefa.textContent = tarefa.categoria;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.concluida;

    checkbox.addEventListener("change", () => {
        tarefa.concluida = checkbox.checked;

        localStorage.setItem("tarefas", JSON.stringify(tarefas))

       console.log(tarefa);

       atualizarconcluidas();
       atualizarpendentes();


    });

    novaDiv.appendChild(checkbox);

    info.append(tituloTarefa,descricaotarefa,categoriatarefa);

    novaDiv.appendChild(info);

    lista.appendChild(novaDiv);
    
});
}
exibirTarefas();

function atualizarconcluidas(){
const concluidas = tarefas.filter(tarefa => tarefa.concluida);
 document.getElementById("tarefasConcluidas").textContent = concluidas.length;
}
atualizarconcluidas();

function atualizarpendentes(){
    const pendentes = tarefas.filter((tarefa => !tarefa.concluida));
    document.getElementById("tarefasPendentes").textContent = pendentes.length;
    
}
atualizarpendentes();


