import React from "react";

//Dados

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["8gb ram", "128gb"] },
];

//Componentes

const Link = ({ titulo, rota }) => {
  return <a href={rota}> {titulo}</a>;
};

const Titulo = ({ titulo }) => {
  return <h1 style={{ color: "green" }}>{titulo}</h1>;
};

const Home = () => {
  return (
    <>
      <Titulo titulo="Home" />
      <p>Essa é a home</p>
    </>
  );
};

const Produtos = () => {
  return (
    <>
      <Titulo titulo="Produtos" />
      {produtos.map(({ nome, propriedades }) => (
        <table>
          <span>{nome}</span>
          <ul>
            {propriedades.map((propriedade) => (
              <li>{propriedade}</li>
            ))}
          </ul>
        </table>
      ))}
    </>
  );
};

const Componentes = () => {
  let Pagina;
  if (window.location.pathname == "/home") {
    Pagina = Home;
  } else {
    Pagina = Produtos;
  }

  return (
    <div>
      <ul>
        <Link titulo="Home" rota="/home" />
        <Link titulo="Produtos" rota="/produtos" />
      </ul>
      <Pagina />
    </div>
  );
};

export default Componentes;
