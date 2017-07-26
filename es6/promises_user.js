
function abrirConexao() {
    console.log('Abrindo conexão...');
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Conexão aberta.");
            resolve({});
        }, 1000);
    });
}

function getUsuario() {
    console.log('Recuperando usuário...');
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Usuário recuperado.');
            resolve('User #1');
        }, 1000);
    });
}

abrirConexao()
    .then((conn) => getUsuario(conn))
    .then((user) => console.log(user));
