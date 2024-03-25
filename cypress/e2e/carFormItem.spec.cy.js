describe("Adição de Carro", () => {
  it("Deve adicionar um carro corretamente", () => {
    cy.visit("http://localhost:3000/carform");

    cy.get('input[name="name"]').type("Fusca");
    cy.get('input[name="brand"]').type("Volkswagen");
    cy.get('input[name="year"]').type("1972");
    cy.get('input[name="color"]').type("Azul");

    cy.get("button").contains("Adicionar").click();

    cy.visit("http://localhost:3000/carlist");
    cy.contains("Fusca").should("exist");
    cy.contains("Volkswagen").should("exist");
    cy.contains("1972").should("exist");
    cy.contains("Azul").should("exist");
  });

  it("Não deve permitir adicionar um carro com campos vazios", () => {
    cy.visit("http://localhost:3000/carform");

    cy.get("button").contains("Adicionar").click();

    cy.contains(
      "Por favor, preencha todos os campos antes de adicionar um carro."
    ).should("exist");

    cy.visit("http://localhost:3000/carlist");
    cy.contains("Carro adicionado com sucesso").should("not.exist");
  });

  it("Não deve permitir adicionar um carro com ano inválido", () => {
    cy.visit("http://localhost:3000/carform");

    cy.get('input[name="name"]').type("Fusca");
    cy.get('input[name="brand"]').type("Volkswagen");
    cy.get('input[name="year"]').type("abcd");
    cy.get('input[name="color"]').type("Azul");

    cy.get("button").contains("Adicionar").click();

    cy.contains(
      "Por favor, digite o ano com 4 dígitos. Permitido somente números."
    ).should("exist");

    cy.visit("http://localhost:3000/carlist");
    cy.contains("Carro adicionado com sucesso").should("not.exist");
  });
});
