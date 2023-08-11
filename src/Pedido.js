import {changeItens} from "./utilites/modifyItensPedido.js";
import {Pagamento} from "./Pagamento.js"
import { Cardapio } from "./Cardapio.js";

class Pedido extends Pagamento {
  constructor(metodoDePagamento, itensPedido) {
    super();
    this.metodoDePagamento = metodoDePagamento;
    this.itens = [];
    changeItens(itensPedido,this.itens)(Cardapio.getItemFromCardapio);
  }

  

}

export {Pedido}