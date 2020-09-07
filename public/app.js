function carregarDados(){
    fetch('/api/contatos')
    .then((response)=>{
        return response.json()
    })
    .then(data =>{
        const painel = document.getElementById('painelDados');
        const {contatos} = data
        const ul = document.createElement('ul');
        const itens = contatos.map(contato => `<li class="item">${contato.nome} - ${contato.email} - ${contato.tipo}</li>`);
        ul.innerHTML = itens.join('');
        painel.appendChild(ul);


    })
}

document.getElementById('btnLoad').addEventListener('click',carregarDados);