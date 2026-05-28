// 1. Selecionamos o botão do HTML usando o ID dele
const botaoAlerta = document.querySelector('#meu-botao');

// 2. Criamos a função que define a ação que vai acontecer
function dispararAlerta() {
    alert('Olá, Dev! Seu primeiro alerta JavaScript funcionou com sucesso!');
    console.log("Eu sou o cara!")
}

// 3. Dizemos ao botão para "escutar" o clique e chamar a função
botaoAlerta.addEventListener('click', dispararAlerta);