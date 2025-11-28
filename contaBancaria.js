class ContaBancaria {
  constructor(saldo = 0) {
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

// Execução solicitada no exercício 2:
const minhaConta = new ContaBancaria(80);
minhaConta.sacar(55);

// Caso queira visualizar o saldo no console:
console.log(minhaConta.saldo);
