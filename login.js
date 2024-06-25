document.getElementById('btLogin').addEventListener('click', function() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    let hasError = false;

    // Limpar mensagens de erro anteriores
    document.getElementById('usuarioErro').textContent = '';
    document.getElementById('senhaErro').textContent = '';
    document.getElementById('loginErro').textContent = '';

    if (!usuario) {
        document.getElementById('usuarioErro').textContent = 'Por favor, insira o usuário.';
        hasError = true;
    }

    if (!senha) {
        document.getElementById('senhaErro').textContent = 'Por favor, insira a senha.';
        hasError = true;
    }

    if (!hasError) {
        if (usuario === 'admin' && senha === 'admin') {
            window.location.href = 'cadastro.html';
        } else {
            document.getElementById('loginErro').textContent = 'Usuário ou senha incorretos.';
        }
    }
});
