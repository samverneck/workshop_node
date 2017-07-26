function sayMyName() {
    const pessoa = { nome: 'Vinicius', sobrenome: 'Avellar' };
    const { nome } = pessoa;
    console.log(nome);
}

function sayMyName({ nome }) {
    console.log(nome);
}
sayMyName({ nome: 'Vinicius', sobrenome: 'Avellar' });

// Também Funciona com Arrays!
const [, item2] = [1, 2, 3];
console.log(item2);
