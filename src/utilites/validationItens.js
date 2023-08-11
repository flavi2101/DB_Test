import { modifyingArrayEntrada } from "./modifyArrayEntrada.js";
import { handleError } from "./handleError.js";

function checkQuantity(item) {
  return item > 0 ? true : handleError(2);
}

function incressingErrorSize(erroObject,erroType){
  erroObject.message.push(handleError(erroType));
  erroObject.size++
}

function validationItens(itensPedido, itens, erroMessage) {

  if(itensPedido.length ===0){
    incressingErrorSize(erroMessage,5)
   
  }

  let itenEquantity = modifyingArrayEntrada(itensPedido);

  if (itenEquantity.some((val) => val.length !== 2)) {
    incressingErrorSize(erroMessage,1)

  }

  return function (checkItenInCardapio) {
    if (erroMessage.size !== 0) return;

    for (let i = 0; i < itenEquantity.length; i++) {
      let isValidItem = checkItenInCardapio(itenEquantity[i]);
      let isVAlidQuantity = checkQuantity(Number(itenEquantity[i][1]));

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
          codigoItem: itenEquantity[i][0],
          quantidade: Number(itenEquantity[i][1]),
          preco: isValidItem.preco,
          principal: isValidItem.principal,
        };
        itens.push(item);
       
      }
    }
  };
}






export { validationItens };
