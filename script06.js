



    class Contador {
    constructor() {
        this.valor = 0; // Inicializa com zero
    }

    incrementar() {
        this.valor++; // Aumenta 1
    }

    decrementar() {
        this.valor--; // Diminui 1
    }
}

const contador = new Contador();
contador.incrementar();
contador.incrementar();

console.log(contador.valor); // Saída: 2

contador.decrementar();
console.log(contador.valor); // Saída: 1
