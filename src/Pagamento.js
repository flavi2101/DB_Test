import { Cardapio } from "./Cardapio.js";
import { handleError } from "./utilites/handleError.js";

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

   

  validacaoPagamento(error, opcao) {
    switch (opcao) {
      case Pagamento.dinheiro:
        return true;
      case Pagamento.credito:
        return true;
      case Pagamento.debito:
        return true;
      default:
        error.message.push(handleError(4));
        error.size++;
    }
  }
}

export { Pagamento };
