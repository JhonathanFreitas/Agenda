let contatos = [];
let contatoAtualIndex = -1;

document.querySelector('.incluir').addEventListener('click', incluirContato);
document.querySelector('.editar').addEventListener('click', editarContato);
document.querySelector('.salvar').addEventListener('click', salvarContato);
document.querySelector('.cancelar').addEventListener('click', cancelarEdicao);
document.querySelector('.excluir').addEventListener('click', excluirContato);

document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', navegarContatos);
});

function incluirContato() {
    const novoContato = obterDadosFormulario();
    contatos.push(novoContato);
    contatoAtualIndex = contatos.length - 1;
    limparFormulario();
    alert('Contato incluído com sucesso!');
    atualizarNavegacao();
}

function editarContato() {
    if (contatoAtualIndex >= 0 && contatoAtualIndex < contatos.length) {
        preencherFormulario(contatos[contatoAtualIndex]);
    }
}

function salvarContato() {
    if (contatoAtualIndex >= 0 && contatoAtualIndex < contatos.length) {
        contatos[contatoAtualIndex] = obterDadosFormulario();
        limparFormulario();
        alert('Contato salvo com sucesso!');
    }
}

function cancelarEdicao() {
    limparFormulario();
}

function excluirContato() {
    if (contatoAtualIndex >= 0 && contatoAtualIndex < contatos.length) {
        contatos.splice(contatoAtualIndex, 1);
        contatoAtualIndex = -1;
        limparFormulario();
        alert('Contato excluído com sucesso!');
        atualizarNavegacao();
    }
}

function navegarContatos(event) {
    const button = event.target;
    if (button.textContent === '|<') {
        contatoAtualIndex = 0;
    } else if (button.textContent === '<') {
        if (contatoAtualIndex > 0) {
            contatoAtualIndex--;
        }
    } else if (button.textContent === '>') {
        if (contatoAtualIndex < contatos.length - 1) {
            contatoAtualIndex++;
        }
    } else if (button.textContent === '>|') {
        contatoAtualIndex = contatos.length - 1;
    }
    if (contatoAtualIndex >= 0 && contatoAtualIndex < contatos.length) {
        preencherFormulario(contatos[contatoAtualIndex]);
    } else {
        limparFormulario();
    }
}

function obterDadosFormulario() {
    return {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        endereco: document.getElementById('endereco').value,
        telefone: document.getElementById('telefone').value,
    };
}

function preencherFormulario(contato) {
    document.getElementById('nome').value = contato.nome;
    document.getElementById('sobrenome').value = contato.sobrenome;
    document.getElementById('endereco').value = contato.endereco;
    document.getElementById('telefone').value = contato.telefone;
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('telefone').value = '';
}

function atualizarNavegacao() {
    document.querySelector('.nav-button:nth-child(1)').disabled = contatos.length === 0;
    document.querySelector('.nav-button:nth-child(2)').disabled = contatos.length === 0;
    document.querySelector('.nav-button:nth-child(3)').disabled = contatos.length === 0;
    document.querySelector('.nav-button:nth-child(4)').disabled = contatos.length === 0;
}

document.addEventListener('DOMContentLoaded', atualizarNavegacao);
