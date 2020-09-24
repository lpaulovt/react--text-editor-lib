import React from "react";

// import { Container } from './styles';

const array2 = () => {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  const dados = produtos.filter(
    (produto) => Number(produto.preco.replace("R$ ", "")) > 1500
  );
  console.log(dados);

  return (
    <section>
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <span>Preço: {preco}</span>
          <ul>
            {cores.map((cor) => (
              <li
                key={cor}
                style={{ background: cor, listStyle: "none", color: "#FFFFFF" }}
              >
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default array2;
