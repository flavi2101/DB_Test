class Cardapio {
  static itensCardapio = [
    {
      codigo: "cafe",
      preco: 3.0,
      principal: true,
    },
    {
      codigo: "chantily",
      preco: 1.5,
      principal: false,
    },
    {
      codigo: "suco",
      preco: 6.2,
      principal: true,
    },
    {
      codigo: "sanduiche",
      preco: 6.5,
      principal: true,
    },
    {
      codigo: "queijo",
      preco: 2.0,
      principal: false,
    },
    {
      codigo: "salgado",
      preco: 7.25,
      principal: true,
    },
    {
      codigo: "combo1",
      preco: 9.5,
      principal: false,
    },
    {
      codigo: "combo2",
      preco: 7.5,
      principal: false,
    },
  ];

  constructor() {
    if (this.Cardapio === Cardapio) {
      throw new Error("Não pode ser criado objetos Cardapio");
    }
  }

  static getItemFromCardapio(userChoice) {
    let exist = Cardapio.itensCardapio.find(
      (iten) => iten.codigo === userChoice[0]
    );
    if (exist === "undefined") {
      try {
        throw new Error("Item inválido");
      } catch (error) {
        console.log(error)
      }
    } else {
      return exist;
    }
  }
}

export { Cardapio };
