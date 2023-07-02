'use strict';
// data atual
const dataElement = document.getElementById('data-atual');

const dataAtual = new Date();

const options = { day: 'numeric', month: 'long', year: 'numeric' };
const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options) + ".";

dataElement.textContent = dataFormatada;
// saudação
let data = new Date();

let hour = data.getHours();
let min = data.getMinutes();

let greeting;
if (hour <= 11) {
    greeting = 'Bom dia!';
} else if (hour <= 17) {
    greeting = 'Boa tarde!';
} else {
    greeting = 'Boa noite!';
}

// Selecionar o elemento <h3> pelo seu id
let mensagemElement = document.getElementById('mensagem');
// Definir o conteúdo do elemento <h3>
mensagemElement.textContent =  greeting + " Seja bem vindo(a) ;D .";
