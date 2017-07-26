function defaultParametersES5(para) {
    var para = para || 'mundo';
    console.log('Olá ' + para + '!');
}
defaultParametersES5();

function defaultParametersES6(para = 'mundo') {
    console.log('Olá ' + para + '!');
}
defaultParametersES6();
