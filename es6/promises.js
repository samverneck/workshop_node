setTimeout(function() {
    console.log('Tempo Expirado!');
}, 1000);

new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
}).then(() => {
    console.log('Como Prometido!');
});

new Promise((resolve, reject) => {
   setTimeout(resolve, 1000)
}).then(() => {
    return 'Encadeou';
}).then((msg) => {
    console.log('Retorno: ' + msg);
});

new Promise((resolve, reject) => {
   setTimeout(resolve, 1000)
}).then(() => {
   throw new Error('Catched!');
}).catch(err => {
   console.log('Error: ' + err);
});
