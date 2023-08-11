import {changeItens} from "./utilites/modifyItensPedido.js";
import {Pagamento} from "./Pagamento.js"
import { Cardapio } from "./Cardapio.js";

class Pedido extends Pagamento {
  constructor(metodoDePagamento, itensPedido) {
    super();
    this.metodoDePagamento = metodoDePagamento;
    this.itens = [];
    this.errorMessage = {message : null}
    changeItens(itensPedido,this.itens,this.errorMessage)(Cardapio.getItemFromCardapio);
  }

  

}

export {Pedido}