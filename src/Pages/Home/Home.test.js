import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("should render welcome message", () => {
    render(<Home />);

    const titleElement = screen.getByText("Página Inicial HotWheels");
    const messageElement = screen.getByText(
      "Olá! Seja bem-vindo(a) à aplicação CRUD de carros HotWheels criada para a disciplina de Desenvolvimento Front End do curso Análise e Desenvolvimento de Sistemas na PUCRS!"
    );

    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
});
