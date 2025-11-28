class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// --- Trecho de teste ---
const pessoaTeste = new Pessoa("Marina", 28);
pessoaTeste.apresentar();
