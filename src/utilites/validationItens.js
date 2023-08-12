import { modifyingArrayEntrada } from "./modifyArrayEntrada.js";
import { handleError } from "./handleError.js";
import { nameConsts } from "./constantes.js";
import { validationOfExtra } from "./validationOfExtra.js";
import { incressingErrorSize } from "./handleError.js";

function checkQuantity(item) {
  return item > 0 ? true : handleError(nameConsts.QUANTIDADEZERO);
}



function validationItens(itensPedido, itens, erroMessage) {

  if(itensPedido.length ===0){
    incressingErrorSize(erroMessage,nameConsts.EMPTYCARRINHO)
   
  }

  let itenAndQuantity = modifyingArrayEntrada(itensPedido);

  if (itenAndQuantity.some((val) => val.length !== 2)) {
    incressingErrorSize(erroMessage,nameConsts.SEM_QUANTIDADE)

  }

  return function (checkItenInCardapio) {
    if (erroMessage.size !== 0) return;

    for (let i = 0; i < itenAndQuantity.length; i++) {
      let isValidItem = checkItenInCardapio(itenAndQuantity[i]);
      let isVAlidQuantity = checkQuantity(Number(itenAndQuantity[i][1]));

      if (typeof isValidItem === "string") {
        erroMessage.message.push(isValidItem);
        erroMessage.size++
        itens = [];
        return null
      } if (typeof isVAlidQuantity === "string") {
        erroMessage.message.push(isVAlidQuantity);
        erroMessage.size++
        itens = [];
        return null
      } else {
        let item = {
          codigoItem: itenAndQuantity[i][0],
          quantidade: Number(itenAndQuantity[i][1]),
          preco: isValidItem.preco,
          principal: isValidItem.principal,
        };
        itens.push(item);
       
      }
    }

    validationOfExtra(erroMessage,itens)
  };
}






export { validationItens };
