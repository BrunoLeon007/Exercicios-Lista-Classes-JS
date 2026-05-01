/* Crie uma classe Livro com atributos titulo e autor. Instancie dois objetos.*/



class Livro {
  constructor(titulo, autor) {
    this.tituloLivro = titulo;
    this.nomeAutor = autor;
  }
}

const Livro1 = new Livro("A vida não é um morango", "Morango");

const Livro2 = new Livro("Por que o Jailson se atrasou", "Jailson");


console.log("O nome do livro é: " + Livro1.tituloLivro + " | O autor do livro é: " + Livro2.nomeAutor);
