
const asyncFunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Finalizou chamada assíncrona.');
        resolve(10);
    }, 1000);
});

async function asyncCall() {
    console.log('Antes de Resolver');
    let valor = await asyncFunction();
    console.log('Após Resolver, Valor:' + valor);
}

asyncCall();
