/* Atributos: Crie uma classe Produto e um metodo aplicar desconto (porcentagem) que altere o preço original*/



    class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.precoOriginal = preco;
    this.precoComDesconto = preco; // Inicializa com o preço original
  }

  // Método que aplica o desconto e altera o preço
  aplicarDesconto(porcentagem) {
    if (porcentagem > 0 && porcentagem <= 100) {
      const valorDesconto = this.precoOriginal * (porcentagem / 100);
      this.precoComDesconto = this.precoOriginal - valorDesconto;
      console.log(`Desconto de ${porcentagem}% aplicado no produto "${this.nome}".`);
      console.log(`Preço original: R$${this.precoOriginal.toFixed(2)} | Novo preço: R$${this.precoComDesconto.toFixed(2)}`);
    } else {
      console.log("Porcentagem de desconto inválida.");
    }
  }
}

// --- Exemplo de Uso ---
const notebook = new Produto("Notebook", 3000);

// Aplicar 10% de desconto
notebook.aplicarDesconto(10); 
// Saída: Desconto de 10% aplicado no produto "Notebook".
// Saída: Preço original: R$3000.00 | Novo preço: R$2700.00
