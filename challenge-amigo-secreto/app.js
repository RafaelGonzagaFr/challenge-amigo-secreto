//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigo = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");

let listaDeAmigos = [];
let contagemDeAmigos = 0;


function adicionarAmigo() {
  resultado.textContent = "";

  if(amigo.value == ""){
    alert("Insira um nome no campo");
  } else {
    let li = document.createElement("li");
    li.textContent = amigo.value;
    listaAmigos.appendChild(li);

    listaDeAmigos.push(amigo.value);
    contagemDeAmigos++;

    amigo.value = "";
  }
}

function sortearAmigo(){
  listaAmigos.textContent = "";

  numeroAleatorio = Math.round(Math.random()*(contagemDeAmigos-1));
  contagemDeAmigos = 0;

  let li = document.createElement("li");
  li.textContent = listaDeAmigos[numeroAleatorio];
  resultado.appendChild(li);

}