const net = require('net');
const port = 3001;

/**
 * Cria a conexão com o servidor.
 */
const client = net.createConnection({ port: port }, () => {
    console.log('Conectado no servidor.');
});

/**
 * Trata os dados vindos do servidor.
 */
client.on('data', (data) => {
    console.log(data.toLocaleString().trim());
});

/**
 * Trata a finalização do cliente.
 */
client.on('end', () => {
    console.log('Desconectado do servidor.');
});

/**
 * Lê os dados digitados no terminal e envia para o servidor.
 * Se for digitado "exit", finaliza a conexão e fecha o cliente.
 */
process.stdin.on('data', (data) => {
    if (data.toLocaleString().trim() === 'exit') {
        process.stdin.end();
        client.end();
    } else {
        client.write(data);
    }
});
