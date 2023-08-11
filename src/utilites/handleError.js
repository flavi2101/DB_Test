export function handleError(error) {
  const ITEM_INEXISTENTE = 0;
  const SEM_QUANTIDADE = 1;
  const QUANTIDADEZERO = 2;
  switch (error) {
    case SEM_QUANTIDADE:
      return new Error("Erro no pedido,verifique se foi informado quantidade")
        .message;

    case ITEM_INEXISTENTE:
      return new Error("Item Invalido").message;

    case QUANTIDADEZERO:
      return new Error("Quantidade Invalida").message;
  }
}
