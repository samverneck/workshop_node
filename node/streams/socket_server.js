const net = require('net');
const port = 3001;

/**
 * Lista de clientes conectados no servidor.
 */
const clients = [];

// Cria um servidor que redireciona os dados recebidos para
// os clientes conectados.
const server = net.createServer((client) => {
    console.log('Cliente conectado.');
    
    // Trata erros ocorridos na conexão com o cliente.
    client.on('error', (err) => {
        removeClient(client);
        
        let msg = err.message;
        if (msg === 'read ECONNRESET')
            msg = 'Cliente desconectado abruptamente.';
        
        console.log(msg);
    });

    // Trata o sinal de desligamento do cliente.
    client.on('end', () => {
        console.log('Cliente desconectado.');
    });

    // Quando receber dados, encaminha para os outros clientes conectados.
    client.on('data', (data) => {
        sendData(data, client);
    });

    addClient(client);
    sendData('Alguém entrou no chat.', client);
    client.write('Bem vindo!');
});

// Trata erros do servidor.
server.on('error', (err) => {
    throw err;
});

// Inicia a escuta na port escolhida.
server.listen(port, () => {
    console.log('Servidor aberto na porta: ' + port);
});

/**
 * Adiciona um cliente na lista.
 * @param {*} client cliente a ser adicionado
 */
function addClient(client) {
    clients.push(client);
}

/**
 * Remove um cliente da lista.
 * @param {*} client cliente a ser removido
 */
function removeClient(client) {
    const removeIdx = clients.findIndex((other) => other === client);
    clients.splice(removeIdx, 1);
}

/**
 * Envia mensagem para os clientes conectados, igrando o remetente.
 * @param {*} data dado a ser enviado
 * @param {*} sender quem enviou a mensagem
 */
function sendData(data, sender) {
    clients.forEach((client) => {
        if (client !== sender)
            client.write(data);
    })
}
