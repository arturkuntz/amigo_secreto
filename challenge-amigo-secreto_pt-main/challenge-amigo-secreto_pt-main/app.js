let listaNomes = []; 

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo) { 
        listaNomes.push(amigo); 
        atualizarListaAmigos();
        limparCampo();
    } else {
        alert('Por favor, insira um nome.');
    }
} 

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < listaNomes.length; i++) {
        let criarLista = document.createElement('li');
        criarLista.textContent = listaNomes[i]; 
        listaAmigos.appendChild(criarLista); 
    }
}

function limparCampo() {
    let campoAmigo = document.getElementById('amigo');
    campoAmigo.value = '';
}

function sortearAmigo() {
    let campoAmigoSorteado = document.getElementById('resultado');

    if (listaNomes.length === 0) {
        alert('Adicione nomes à lista!');
    } else {
        // Sorteia um índice aleatório
        let amigoAleatorio = Math.floor(Math.random() * listaNomes.length);

        // Exibe o nome sorteado na página
        campoAmigoSorteado.innerText = `Seu amigo sorteado é ${listaNomes[amigoAleatorio]}`;
    }
}

