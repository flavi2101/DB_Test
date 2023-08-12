import { nameConsts } from "./constantes.js";

export function handleError(error) {
  switch (error) {
    case nameConsts.SEM_QUANTIDADE:
      return new Error("Erro no pedido,verifique se foi informado quantidade")
        .message;

    case nameConsts.ITEM_INEXISTENTE:
      return new Error("Item Invalido").message;

    case nameConsts.QUANTIDADEZERO:
      return new Error("Quantidade Invalida").message;

    case nameConsts.PAGAMENTO:
      return new Error("Forma de Pagamento Invalida").message;
    case nameConsts.EMPTYCARRINHO:
      return new Error("Carrinho esta vazio").message;
    case nameConsts.SEMPRICIPAL:
      return new Error("Item extra não pode ser pedido sem o principal").message;
  }
}


export function incressingErrorSize(erroObject,erroType){
  erroObject.message.push(handleError(erroType));
  erroObject.size++
}