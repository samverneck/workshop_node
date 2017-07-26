class Empregado {
    constructor() {
        this.salario = 1000;
    }

    getSalario() {
        return this.salario;
    }
}

class Chefe extends Empregado {
    getSalario() {
        return super.getSalario() * 3;
    }
}

const empregado = new Empregado();
console.log(`Empregado: ${empregado.getSalario()}`);

const chefe = new Chefe();
console.log(`Chefe: ${chefe.getSalario()}`);
