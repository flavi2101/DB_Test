import { modifyingArrayEntrada } from "./modifyArrayEntrada.js";

function changeItens(itensPedido, itens) {
  let itenEquantity = modifyingArrayEntrada(itensPedido);
  if (itenEquantity.length % 2 !== 0) {
    try {
      throw new Error("Erro no pedido,verifique se foi informado quantidade");
    } catch (error) {
      console.log(error)
    }
  } else {
    return function (checkItenInCardapio) {
      for (let i = 0; i < itenEquantity.length; i++) {
        let isValidItem = checkItenInCardapio(itenEquantity[i]);
        if (typeof isValidItem === "object") {
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
}

export { changeItens };
