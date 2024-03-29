import { questions } from "./questions.js";

var revelarResposta = document.querySelector('#revelarResposta')
revelarResposta.onclick = function revelarResposta() {
    var resposta = document.querySelector("#resposta");
    resposta.classList.toggle("blur");
}

var atualizarDadosPergunta = document.querySelector('#atualizarPergunta')
atualizarDadosPergunta.onclick = buscarInformacao

function proximaPergunta(proximaPergunta) {
    var pergunta = document.querySelector("#cardContainer");
    pergunta.innerHTML = "";

    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "animate__animated", "animate__backInRight");
    cardDiv.innerHTML = `
    <div class="card-cabecalho centralizar">
        <!--Pergunta-->
        <h1 class="card-titulo">${proximaPergunta.title}?</h1>
    </div>
    <div id="resposta" class="card-conteudo blur">
        <!--Resposta-->
        <p>${proximaPergunta.description}</p>
    </div>
    `;
    pergunta.appendChild(cardDiv);
}

/*
function buscarInformacao() {
    fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
        return resultado.json();
    })
    .then(function (resultadoJson) {
        proximaPergunta(resultadoJson);
    });
} 

window.addEventListener('load', buscarInformacao)
*/

function buscarInformacao() {
    var valorAleatorio = Math.floor(Math.random() * questions.length);
    var perguntaAleatoria = questions[valorAleatorio];
    proximaPergunta(perguntaAleatoria);
}

buscarInformacao();
