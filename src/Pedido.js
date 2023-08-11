import { validationItens } from "./utilites/validationItens.js";
import { Pagamento } from "./Pagamento.js";
import { Cardapio } from "./Cardapio.js";

class Pedido extends Pagamento {
  #total = 0;
  constructor(metodoDePagamento, itensPedido) {
    super();
    this.metodoDePagamento = metodoDePagamento;
    this.itens = [];
    this.errorMessage = { message: [], size: 0 };
    validationItens(
      itensPedido,
      this.itens,
      this.errorMessage
    )(Cardapio.getItemFromCardapio);
    this.validacaoPagamento(this.errorMessage, this.metodoDePagamento);
  }

  calcularTotal() {
    if (this.errorMessage.size === 0) {
      this.#total = this.itens.reduce((sum, current) => {
        return sum + current.quantidade * current.preco;
      }, 0);

      this.#cobrar();
    } else {
      return this.errorMessage.message.forEach((item) => console.log(item));
    }
  }

  #cobrar() {
    switch (this.metodoDePagamento) {
      case Pagamento.dinheiro:
        return console.log(`R$ ${(this.#total * 0.95).toFixed(2)}`);
      case Pagamento.credito:
        return console.log(`R$ ${(this.#total * 1.03).toFixed(2)}`);
      case Pagamento.debito:
        return console.log(`R$ ${this.#total.toFixed(2)}`);
      default:
        return "Forma de Pagamento Invalida";
    }
  }
}

export { Pedido };
