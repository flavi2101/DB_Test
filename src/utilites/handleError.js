export function handleError(error) {
  const ITEM_INEXISTENTE = 0;
  const SEM_QUANTIDADE = 1;
  const QUANTIDADEZERO = 2;
  const PAGAMENTO = 4;
  const EMPTYCARRINHO = 5;
  switch (error) {
    case SEM_QUANTIDADE:
      return new Error("Erro no pedido,verifique se foi informado quantidade")
        .message;

    case ITEM_INEXISTENTE:
      return new Error("Item Invalido").message;

    case QUANTIDADEZERO:
      return new Error("Quantidade Invalida").message;

    case PAGAMENTO:
      return new Error("Forma de Pagamento Invalida").message;
    case EMPTYCARRINHO:
      return new Error("Carrinho esta vazio").message;
  }
}
