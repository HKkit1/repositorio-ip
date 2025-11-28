class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }
}
const p = new Produto("Camiseta", 100);
p.aplicarDesconto(20);

console.log(p.preco); // 80
