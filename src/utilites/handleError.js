export function handleError(error) {
  const ITEM_INEXISTENTE = 0;
  const SEM_QUANTIDADE = 1;

  switch (error) {
    case SEM_QUANTIDADE:
      return new Error("Erro no pedido,verifique se foi informado quantidade")
        .message;

    case ITEM_INEXISTENTE:
      return new Error("Item Inexistente").message;
  }
}
