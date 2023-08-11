import { Cardapio } from "./Cardapio.js";

class Pagamento extends Cardapio {
  static dinheiro = "dinheiro";
  static credito = "credito";
  static debito = "debito";

  constructor() {
    super();
    if (this.Pagamento === Pagamento) {
      throw new Error("Não pode ser criado objetos Pagamento");
    }
  }

  cobrar(opcaoDePagamento, total) {
    switch (opcaoDePagamento) {
      case this.dinheiro:
        return total * 0.95;
      case this.credito:
        return total * 1.03;
      case this.dinheiro:
        return total;
      default:
        return "Forma de Pagamento Invalida";
    }
  }
}

export {Pagamento}