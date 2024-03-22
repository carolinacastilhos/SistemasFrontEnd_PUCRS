import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column m-4">
      <h1>Sobre</h1>
      <div className="container boxAbout">
        <p>
          CRUD é um acrônimo que representa as quatro operações básicas que
          podem ser realizadas em dados persistentes em muitos sistemas de banco
          de dados ou aplicações interativas. Essas operações são:
        </p>

        <ol>
          <li>
            <b>Create (Criar):</b> Criar refere-se à operação de criar novos
            dados ou registros no sistema. Isso geralmente envolve a inserção de
            novas informações em um banco de dados ou a criação de novos objetos
            em um sistema de software.
          </li>
          <li>
            <b>Read (Ler):</b> Ler refere-se à operação de recuperar ou
            visualizar dados existentes no sistema. Isso envolve geralmente a
            consulta ou busca por dados armazenados em um banco de dados ou
            sistema de arquivos.
          </li>
          <li>
            <b>Update (Atualizar):</b> Atualizar refere-se à operação de
            modificar dados existentes no sistema. Isso envolve a alteração ou
            atualização de informações já presentes em um banco de dados ou
            sistema de software.
          </li>
          <li>
            <b>Delete (Excluir):</b> Excluir refere-se à operação de remover
            dados existentes do sistema. Isso geralmente envolve a exclusão de
            registros de um banco de dados ou a remoção de objetos de um sistema
            de software.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
