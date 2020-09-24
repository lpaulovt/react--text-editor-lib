import React from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);
    
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Nome: {dados.cliente}</span>
      <span>Idade: {dados.idade}</span>
      <span>
        Situação:{" "}
        <span style={dados.ativa ? { color: "green" } : { color: "red" }}>
          {" "}
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </span>
      <span>Total: {total}</span>
      <span>{total > 7000 ? "Ultrapassou !" : "Menor "}</span>
    </div>
  );
};

export default App;
