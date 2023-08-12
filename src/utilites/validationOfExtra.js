import { nameConsts } from "./constantes.js";
import { incressingErrorSize } from "./handleError.js";

function validationOfExtra(erroObj, pedidos) {
  let checkIfHasMainItens = pedidos.every((iten) => iten.pricipal === true);

  if (checkIfHasMainItens) {
    incressingErrorSize(erroObj, nameConsts.SEMPRICIPAL);
    pedidos = [];
    return;
  }

  let hasCafe = false;
  let hasSanduiche = false;

  for (let pedido of pedidos) {
    if (pedido.codigoItem === "cafe") {
      hasCafe = true;
    } else if (pedido.codigoItem === "sanduiche") {
      hasSanduiche = true;
    } else if (pedido.codigoItem === "chantily") {
      var hasChantiy = hasCafe;
    } else if (pedido.codigoItem === "queijo") {
      var hasQueijo = hasSanduiche;
    }
  }

  for (let i =0; i < pedidos.length; i++) {
    if (hasChantiy) {
      continue;
    } else if (hasQueijo) {
      continue;
    } else {
      incressingErrorSize(erroObj, nameConsts.SEMPRICIPAL);
      pedidos = [];
      return;
    }
  }
}

export { validationOfExtra };
