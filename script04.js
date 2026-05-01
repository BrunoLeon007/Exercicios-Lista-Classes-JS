class Carro{
    constructor(){
        this.velocidade = 0
    }
    acelerar(){
        this.velocidade += 10
    }
}
const carro01 = new Carro () 
console.log(carro01.velocidade)
carro01.acelerar()
console.log(carro01.velocidade)
