
class Carro{
    constructor(velocidade, nome){
        this.velocidadeDoCarro = velocidade
        this.nomeDoDonodoCarro = nome
        
    }
    acelerar(){
       
       return this.velocidadeDoCarro += 10
    }
}
const carroBruno = new Carro (0, "Bruno") 
console.log("O carro do "+ carroBruno.nomeDoDonoCarro + "esta com velocidade " + carroBruno.acelerar() )
