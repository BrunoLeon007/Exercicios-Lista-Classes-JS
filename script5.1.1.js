class Produto {
  constructor(valor, nome, id, quantidade, peso, descricao, tamanho, cor, codigoBarra, marca, custoEmbalagem, disponibilidade, categoria, tipoProduto, fornecedor, garantia) {
    this.valor = valor;
    this.nome = nome;
    this.id = id;
    this.quantidade = quantidade;
    this.peso = peso;
    this.descricao = descricao;
    this.tamanho = tamanho;
    this.cor = cor;
    this.codigoBarra = codigoBarra;
    this.marca = marca;
    this.custoEmbalagem = custoEmbalagem;
    this.disponibilidade = disponibilidade;
    this.categoria = categoria;
    this.tipoProduto = tipoProduto;
    this.fornecedor = fornecedor;
    this.garantia = garantia;
  }

  aplicarDesconto(porcentagem) {
    
    const desconto = this.valor * (porcentagem / 100);
    this.valor -= desconto;
  }
}


const produto01 = new Produto(3000, "Notebook");

produto01.aplicarDesconto(10);


console.log(`Novo valor do ${produto01.nome}: R$ ${produto01.valor}`); 
