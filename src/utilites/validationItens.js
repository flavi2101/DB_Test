import { modifyingArrayEntrada } from "./modifyArrayEntrada.js";
import { handleError } from "./handleError.js";

function validationItens(itensPedido, itens, erroMessage) {
  let itenEquantity = modifyingArrayEntrada(itensPedido);

  if (itenEquantity.some((val) => val.length !== 2)) {
    erroMessage.message = handleError(1);
  }

  return function (checkItenInCardapio) {
    if (erroMessage.message !== null) return;

    for (let i = 0; i < itenEquantity.length; i++) {
      let isValidItem = checkItenInCardapio(itenEquantity[i]);
      let isVAlidQuantity = checkQuantity(Number(itenEquantity[i][1]));

      if (typeof isValidItem === "string") {
        erroMessage.message = isValidItem;
        itens = [];
        return null
      } else if (typeof isVAlidQuantity === "string") {
        erroMessage.message = isVAlidQuantity;
        itens = [];
        return null
      } else {
        let item = {
          codigoItem: itenEquantity[i][0],
          quantidade: itenEquantity[i][1],
          preco: isValidItem.preco,
          principal: isValidItem.principal,
        };
        itens.push(item);
       
      }
    }
  };
}

function checkQuantity(item) {
  return item > 0 ? true : handleError(2);
}

export { validationItens };
