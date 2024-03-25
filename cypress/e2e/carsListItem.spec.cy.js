describe("CarListItem", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/carlist");
  });

  it("Deve exibir a lista de carros", () => {
    cy.get(".list-group-item").should("have.length.gt", 0);
  });

  it("Deve abrir o modal CarDetail quando um carro é clicado", () => {
    cy.get(".list-group-item").first().click();

    cy.get(".modal").should("be.visible");
  });

  it("Deve excluir um carro quando o ícone de exclusão for clicado", () => {
    cy.get(".list-group-item").first().find('[title="delete"]').click();

    cy.get(".list-group-item").should("have.length.lt", 5);
  });

  it('Deve redirecionar para a página de adição de carro quando o botão "Adicionar" for clicado', () => {
    cy.contains("Adicionar").click();

    cy.url().should("include", "http://localhost:3000/carform");
  });
});
