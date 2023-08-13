import { Pedido } from "./Pedido.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        let pedido1  = new Pedido(metodoDePagamento,itens)
        return pedido1.calcularTotal()
       
      
    }

}

export { CaixaDaLanchonete };
