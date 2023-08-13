import { validationItens } from "./utilites/validationItens.js";
import { Pagamento } from "./Pagamento.js";
import { Cardapio } from "./Cardapio.js";

/*Ao se instanciar um pedido ele tem no seu construtor a funçao:
1-Criar um prototype chain com a classe pagamento e Cardapio
2-Validação dos dados de entrada
3-Validação da forma de pagamento
4- Array de posiveis erros
*/

class Pedido extends Pagamento {
  // Impedir acesso a alteração do valor da varaivel total
  #total = 0;

  constructor(metodoDePagamento, itensPedido) {
    super();
    this.metodoDePagamento = metodoDePagamento;
    this.itens = [];
    this.errorMessage = { message: null, size: 0 };
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

     return this.#cobrar();
    } else {
      return this.errorMessage.message;
    }
  }

  #cobrar() {
    switch (this.metodoDePagamento) {
      case Pagamento.dinheiro:
        return `R$ ${(this.#total * 0.95).toFixed(2).replace(".",",")}`;
      case Pagamento.credito:
        return `R$ ${(this.#total * 1.03).toFixed(2).replace(".",",")}`;
      case Pagamento.debito:
        return `R$ ${this.#total.toFixed(2).replace(".",",")}`;
      default:
        return "Forma de Pagamento Invalida";
    }
  }
}

export { Pedido };
