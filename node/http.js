const http = require('http');

const middlewareList = [];

/**
 * Cria um novo servidor http já passando o callback para tratar as requisições.
 */
const server = http.createServer((req, res) => {
    const { headers, method, url } = req;
    let body = [];

    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        // Joga cada parte recebida em um array.
        body.push(chunk);
    }).on('end', () => {
        // Trata os dados recebidos do cliente.
        body = Buffer.concat(body).toString();

        res.on('error', (err) => {
            console.error(err);
        });

        console.log(req.method + ' ' + req.url);

        // Ira buscar o middleware para tratar a requisição,
        // se não encontrar envia not found para o cliente.
        let middleware = getMiddleware(req.method, req.url);
        if (typeof middleware === 'undefined') {
            res.statusCode = 404;
            res.end('Url ' + req.url + ' not found!');
        } else {
            middleware.exec(req, res);
        }
    });
});

server.listen(8080, () => {
    console.log('Servindo na porta 8080.');
});

/**
 * Adiciona novo middleware na lista.
 * @param {*} method método da requisição, Ex: GET, POST, PUT, PATCH, DELETE
 * @param {*} path caminho da url que o middleware irá tratar
 * @param {*} middleware função que irá fazer o tratamento da requisição
 */
function addMiddleware(method, path, middleware) {
    middlewareList.push({
        method: method,
        path: path,
        exec: middleware
    });
}

/**
 * Retorna o middleware que tem o mesmo método e caminho.
 * @param {*} method método da requisição
 * @param {*} path caminho da url
 */
function getMiddleware(method, path) {
    return middlewareList.find((middleware) => {
        // Exemplo simples, não funciona com query strings.
        if (middleware.method === method && middleware.path === path)
            return true;
    });
}

// Tratamento da página inicial.
addMiddleware('GET', '/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Welcome!' }));
});

// Tratamento da página /hello.
addMiddleware('GET', '/hello', (req, res) => {
    setTimeout(() => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ message: 'Hello!' }));
        res.end();
    }, 5000);
});
