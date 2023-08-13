import { nameConsts } from "./constantes.js";
import { incressingErrorSize } from "./handleError.js";

function validationOfExtra(erroObj, pedidos) {
  let checkIfHasMainItens = pedidos.every((iten) => iten.pricipal === false);

  if (checkIfHasMainItens) {
    incressingErrorSize(erroObj, nameConsts.SEMPRICIPAL);
    pedidos = [];
    return;
  }

  let hasCafe = false;
  let hasSanduiche = false;
  let hasChantily = false;
  let hasQueijo = false;

  for (let pedido of pedidos) {
    if (pedido.codigoItem === "cafe") {
      hasCafe = true;
    } else if (pedido.codigoItem === "sanduiche") {
      hasSanduiche = true;
    } else if (pedido.codigoItem === "chantily" ) {
      hasChantily = true;
    } else if (pedido.codigoItem === "queijo") {
      hasQueijo = true;
    }
  }

  for (let i = 0; i < pedidos.length; i++) {
    if ((hasChantily === true && hasCafe === false)  ) {
      incressingErrorSize(erroObj, nameConsts.SEMPRICIPAL);
      pedidos = [];
      return;
    } else if ((hasQueijo ===true && hasSanduiche ===false) ) {
      incressingErrorSize(erroObj, nameConsts.SEMPRICIPAL);
      pedidos = [];
      return;
    } else {
      continue;
    }
  }
}

export { validationOfExtra };
