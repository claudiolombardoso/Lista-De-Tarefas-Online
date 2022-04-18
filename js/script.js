let array_tarefas = [];

onload = function () {
  let localStorage_data = localStorage.getItem("listadetarefas");
  if (localStorage_data) {
    array_tarefas = JSON.parse(localStorage_data);
    var list = document.getElementById("list");

    for (let i = 0; i < array_tarefas.length; i++) {
      let div = document.createElement("li");
      div.appendChild(document.createTextNode(array_tarefas[i]));
      list.appendChild(div);
    }
  }
};

function addList() {
  var list = document.getElementById("list");
  var cont = document.getElementById("cont");

  let div = document.createElement("li");
  div.appendChild(document.createTextNode(cont.value));
  array_tarefas.push(cont.value);

  list.appendChild(div);
  cont.value = "";
  console.log(div);
}

function savelist() {
  localStorage.setItem("listadetarefas", JSON.stringify(array_tarefas));
}

function rmvList() {
  let list = document.getElementById("list");
  let div = document.createElement("div");
  list.lastChild.remove(div);
  let remove = array_tarefas.pop();
  console.log(remove); 
}

    



  
     
