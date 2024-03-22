import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column m-4">
      <h1>Página Inicial HotWheels</h1>
      <div className="container boxHome">
        <p>
          Olá! Seja bem-vindo(a) à aplicação CRUD de carros HotWheels criada
          para a disciplina de Desenvolvimento Front End do curso Análise e
          Desenvolvimento de Sistemas na PUCRS!
        </p>
      </div>
    </div>
  );
};

export default Home;
