
// Arrow functions sem a abertura do bloco {},
// retornam o valor apontado por =>.
const filtered = [1, 2, 3].filter((el) => el === 2); // function(el) { return el === 2; }
console.log('Elemento: ' + filtered);

// Como cada função tem o seu escopo de this.
// A mensagem será "undefined", pois não foi declarada.
var showMessage1 = function () {
    this.msg = 'Olá';
    setTimeout(function () {
        console.log(this.msg); // typeof this.msg === 'undefined'
    }, 0);
}

// No caso do uso de arrow functions, o escopo permanece
// o mesmo da função pai.
var showMessage2 = function () {
    this.msg = 'Olá';
    setTimeout(() => {
        console.log(this.msg); // 'Olá'
    }, 0);
}

showMessage1();
showMessage2();
