
function abrirConexao(cb) {
    console.log('Abrindo conexão...');
    setTimeout(function() {
        console.log("Conexão aberta.");
        cb({});
    }, 1000);
}

function getUsuario(conn, cb) {
    console.log('Recuperando usuário...');
    setTimeout(function() {
        console.log('Usuário recuperado.');
        cb('User #1');
    }, 1000);
}

abrirConexao(function(conn) {
    getUsuario(conn, function(user) {
        console.log(user);
    });
});
