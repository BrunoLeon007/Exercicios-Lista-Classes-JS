

class Retangulo {
    constructor(altura, largura) {
        this.alturaRetangulo = altura;
        this.larguraRetangulo = largura;
    }

    calcularArea() {
        
        console.log("A área do retângulo é de: " + (this.alturaRetangulo * this.larguraRetangulo));
    }
}

const retangulo01 = new Retangulo(2, 3);


retangulo01.calcularArea(); 
