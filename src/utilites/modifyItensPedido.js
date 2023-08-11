import { modifyingArrayEntrada } from "./modifyArrayEntrada.js";
import { handleError } from "./handleError.js";

function changeItens(itensPedido, itens, erroMessage) {
  let itenEquantity = modifyingArrayEntrada(itensPedido);

  if (itenEquantity.some((val) => val.length !== 2)) {
    erroMessage.message = handleError(1);
  }

  return function (checkItenInCardapio) {
    if(erroMessage.message !== null) return

    for (let i = 0; i < itenEquantity.length; i++) {
      let isValidItem = checkItenInCardapio(itenEquantity[i]);
      
      if (typeof isValidItem !== "string") {
        let item = {
          codigoItem: itenEquantity[i][0],
          quantidade: itenEquantity[i][1],
          preco: isValidItem.preco,
          principal: isValidItem.principal,
        };
        itens.push(item);
      } else {
        erroMessage.message = isValidItem;
        itens = []
        return erroMessage.message;
      }
    }
  };
}

export { changeItens };
