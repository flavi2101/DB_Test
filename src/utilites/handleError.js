import { nameConsts } from "./constantes.js";

export function handleError(error) {
  switch (error) {
    case nameConsts.SEM_QUANTIDADE:
      return new Error("Item inválido!")
        .message;

    case nameConsts.ITEM_INEXISTENTE:
      return new Error("Item inválido!").message;

    case nameConsts.QUANTIDADEZERO:
      return new Error("Quantidade inválida!").message;

    case nameConsts.PAGAMENTO:
      return new Error("Forma de pagamento inválida!").message;
    case nameConsts.EMPTYCARRINHO:
      return new Error("Não há itens no carrinho de compra!").message;
    case nameConsts.SEMPRICIPAL:
      return new Error("Item extra não pode ser pedido sem o principal").message;
  }
}


export function incressingErrorSize(erroObject,erroType){
  erroObject.message = handleError(erroType);
  erroObject.size++
}